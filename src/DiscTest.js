import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import questions from "./data/questions";
import "./DiscTest.css";

const DiscTest = () => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
  };

  const calculateResults = () => {
    const result = { D: 0, I: 0, S: 0, C: 0 };
    Object.values(answers).forEach((value) => {
      result[value]++;
    });

    return result;
  };

  const result = calculateResults();

  return (
    <Container>
      <h1>Kiểm tra chỉ số DISC</h1>
      {!showResult ? (
        <Form onSubmit={handleSubmit}>
          {questions.map((question, key) => (
            <Form.Group key={question.id}>
              <Form.Label>{key + 1 + ". " + question.text}</Form.Label>
              <Row>
                {question.answers.map((answer) => (
                  <Col key={answer.value} md={3}>
                    <Form.Check
                      className="radio-pointer"
                      type="radio"
                      label={answer.text}
                      name={question.id}
                      value={answer.value}
                      id={`question-${question.id}-answer-${answer.value}`} // Add id to associate label
                      onChange={() =>
                        handleAnswerChange(question.id, answer.value)
                      }
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
          ))}
          <Button type="submit" variant="primary">
            Nộp
          </Button>
        </Form>
      ) : (
        <div>
          <h3>Kết quả DISC của bạn</h3>
          <ul>
            {Object.entries(result).map(([trait, score]) => (
              <li key={trait}>
                {trait}: {score} {score > 0 ? "điểm" : ""}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
};

export default DiscTest;
