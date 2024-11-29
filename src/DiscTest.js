import React, { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "./DiscTest.css";
import questions from "./data/questions";

const DISC_PER_PAGE = 12;

const DiscTest = () => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const unansweredQuestions = shuffledQuestions.filter(
      (question) => !answers[question.id]
    );
    if (unansweredQuestions.length > 0) {
      alert("Vui lòng trả lời tất cả các câu hỏi trước khi nộp!");
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
    const descriptions = {
      D: [
        "Dominance (D) - Bạn là người quyết đoán, thích lãnh đạo và luôn muốn đạt được mục tiêu nhanh chóng.",
        "Dominance (D) - Bạn không quá chú trọng đến quyền lực và lãnh đạo, thích làm việc độc lập.",
      ],
      I: [
        "Influence (I) - Bạn là người năng động, giao tiếp tốt và có khả năng thuyết phục người khác.",
        "Influence (I) - Bạn có thể ít chú trọng đến việc tạo ảnh hưởng hoặc giao tiếp với người khác.",
      ],
      S: [
        "Steadiness (S) - Bạn là người kiên nhẫn, ổn định và có xu hướng hỗ trợ người khác một cách kiên định.",
        "Steadiness (S) - Bạn ít kiên nhẫn hơn và thích sự thay đổi hơn là sự ổn định.",
      ],
      C: [
        "Conscientiousness (C) - Bạn rất chú ý đến chi tiết, có tính tổ chức và luôn hoàn thành công việc với chất lượng cao.",
        "Conscientiousness (C) - Bạn ít chú trọng đến chi tiết và đôi khi thích sự linh hoạt hơn là sự chính xác tuyệt đối.",
      ],
    };
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
          <Button type="submit" variant="primary" size="lg" className="mt-3">
            Nộp
          </Button>
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
          <Button variant="secondary" onClick={handleReload}>
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
    <Form.Group key={question.id} className="mt-3">
      <Form.Label>
        {questionNumber}. {question.text}
      </Form.Label>
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
    </Form.Group>
  );
};

const Result = ({ result, getTraitDescription }) => (
  <div>
    <h3>Kết quả DISC của bạn</h3>
    <ul>
      {Object.entries(result).map(([trait, score]) => (
        <li key={trait}>
          <strong>{trait}:</strong> {score} điểm
          <p>{getTraitDescription(trait, score)}</p>
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
          variant="secondary"
          disabled={currentPage === 1}
          onClick={() => onPageChange((prev) => prev - 1)}
        >
          Trước
        </Button>
        <span className="mx-2">{`Trang ${currentPage} / ${totalPages}`}</span>
        <Button
          variant="secondary"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange((prev) => prev + 1)}
        >
          Sau
        </Button>
      </Col>
    </Row>
  );

export default DiscTest;
