import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  ProgressBar,
  Alert,
} from "react-bootstrap";
import "./DiscTest.css";
import questions from "./data/questions";
import descriptions from "./data/descriptions";

const DISC_PER_PAGE = 12;

const DiscTest = () => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setShuffledQuestions([...questions].sort(() => Math.random() - 0.5));
  }, []);

  const totalPages = Math.ceil(shuffledQuestions.length / DISC_PER_PAGE);

  const getCurrentPageQuestions = () => {
    const startIdx = (currentPage - 1) * DISC_PER_PAGE;
    return shuffledQuestions.slice(startIdx, startIdx + DISC_PER_PAGE);
  };

  const handleAnswerChange = (questionId, value, point) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: { value, point },
    }));
    setShowAlert(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const unansweredQuestions = shuffledQuestions.filter(
      (question) => !answers[question.id]
    );
    if (unansweredQuestions.length > 0) {
      setShowAlert(true);
      return;
    }
    setShowResult(true);
  };

  const calculateResults = () => {
    const result = { D: 0, I: 0, S: 0, C: 0 };
    Object.values(answers).forEach(({ value, point }) => {
      result[value] += point;
    });
    return result;
  };

  const getTraitDescription = (trait, score) => {
    return (
      descriptions[trait]?.[score >= DISC_PER_PAGE * 1.5 ? 0 : 1] ||
      "Description not available."
    );
  };

  const handleReload = () => {
    window.location.reload();
  };

  const result = calculateResults();

  return (
    <Container>
      <h1>Kiểm tra chỉ số DISC</h1>

      {!showResult && (
        <div className="my-3">
          <ProgressBar
            now={(currentPage / totalPages) * 100}
            label={`Trang ${currentPage}/${totalPages}`}
          />
        </div>
      )}

      {!showResult ? (
        <Form onSubmit={handleSubmit}>
          {getCurrentPageQuestions().map((question, index) => (
            <Question
              key={question.id}
              question={question}
              index={index}
              currentPage={currentPage}
              answers={answers}
              onAnswerChange={handleAnswerChange}
            />
          ))}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="mt-3 w-100"
          >
            Nộp
          </Button>

          {showAlert && (
            <Alert
              className="mt-3"
              variant="danger"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              Vui lòng trả lời tất cả các câu hỏi trước khi nộp!
            </Alert>
          )}
        </Form>
      ) : (
        <Result result={result} getTraitDescription={getTraitDescription} />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        showResult={showResult}
      />

      <Row className="text-center mt-4">
        <Col>
          <Button variant="outline-secondary" size="lg" onClick={handleReload}>
            Tải lại
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

const Question = ({
  question,
  index,
  currentPage,
  answers,
  onAnswerChange,
}) => {
  const questionNumber = (currentPage - 1) * DISC_PER_PAGE + index + 1;

  return (
    <div className={`question-card ${answers[question.id] ? "answered" : ""}`}>
      <h5>
        {questionNumber}. {question.text}
      </h5>
      <Row>
        {question.answers.map((answer) => (
          <Col key={answer.value} md={6}>
            <Form.Check
              className="radio-pointer"
              type="radio"
              label={answer.text}
              name={`question-${question.id}`}
              value={answer.value}
              id={`question-${question.id}-answer-${answer.text}`}
              checked={
                answers[question.id]?.value === answer.value &&
                answers[question.id]?.point === answer.point
              }
              onChange={() =>
                onAnswerChange(question.id, answer.value, answer.point)
              }
              inline
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const Result = ({ result, getTraitDescription }) => (
  <div className="result-card">
    <h3 className="text-success text-center">Kết quả DISC của bạn</h3>
    <ul>
      {Object.entries(result).map(([trait, score]) => (
        <li key={trait}>
          <strong className="text-uppercase">{trait}:</strong> {score} điểm
          <p className="text-muted">{getTraitDescription(trait, score)}</p>
        </li>
      ))}
    </ul>
  </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange, showResult }) =>
  !showResult && (
    <Row className="text-center mt-4">
      <Col>
        <Button
          variant="outline-primary"
          size="sm"
          disabled={currentPage === 1}
          onClick={() => onPageChange((prev) => prev - 1)}
          className="me-2"
        >
          Trước
        </Button>
        <span className="mx-2">{`Trang ${currentPage} / ${totalPages}`}</span>
        <Button
          variant="outline-primary"
          size="sm"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange((prev) => prev + 1)}
          className="ms-2"
        >
          Sau
        </Button>
      </Col>
    </Row>
  );

export default DiscTest;
