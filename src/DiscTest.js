import React, { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import questions from "./data/questions";
import "./DiscTest.css";

const DiscTest = () => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // Shuffle the questions only once when the component is mounted
  useEffect(() => {
    setShuffledQuestions([...questions].sort(() => Math.random() - 0.5));
  }, []);

  const handleAnswerChange = (questionId, text) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: text,
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

  const getTraitDescription = (trait, score) => {
    switch (trait) {
      case "D":
        if (score >= 3)
          return "Dominance (D) - Bạn là người quyết đoán, thích lãnh đạo và luôn muốn đạt được mục tiêu nhanh chóng.";
        return "Dominance (D) - Bạn không quá chú trọng đến quyền lực và lãnh đạo, thích làm việc độc lập.";
      case "I":
        if (score >= 3)
          return "Influence (I) - Bạn là người năng động, giao tiếp tốt và có khả năng thuyết phục người khác.";
        return "Influence (I) - Bạn có thể ít chú trọng đến việc tạo ảnh hưởng hoặc giao tiếp với người khác.";
      case "S":
        if (score >= 3)
          return "Steadiness (S) - Bạn là người kiên nhẫn, ổn định và có xu hướng hỗ trợ người khác một cách kiên định.";
        return "Steadiness (S) - Bạn ít kiên nhẫn hơn và thích sự thay đổi hơn là sự ổn định.";
      case "C":
        if (score >= 3)
          return "Conscientiousness (C) - Bạn rất chú ý đến chi tiết, có tính tổ chức và luôn hoàn thành công việc với chất lượng cao.";
        return "Conscientiousness (C) - Bạn ít chú trọng đến chi tiết và đôi khi thích sự linh hoạt hơn là sự chính xác tuyệt đối.";
      default:
        return "";
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <Container>
      <h1>Kiểm tra chỉ số DISC</h1>
      {!showResult ? (
        <Form>
          {shuffledQuestions.map((question, key) => (
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
                      id={`question-${question.id}-answer-${answer.text}`} // Add id to associate label
                      onChange={() =>
                        handleAnswerChange(question.id, answer.value)
                      }
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
          ))}
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Nộp
          </Button>
        </Form>
      ) : (
        <div>
          <h3>Kết quả DISC của bạn</h3>
          <ul>
            {Object.entries(result).map(([trait, score]) => (
              <li key={trait}>
                <strong>{trait}:</strong> {score} {score > 0 ? "điểm" : ""}
                <p>{getTraitDescription(trait, score)}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Row className="text-center">
        <Col>
          <Button variant="secondary" onClick={handleReload}>
            Tải lại
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DiscTest;
