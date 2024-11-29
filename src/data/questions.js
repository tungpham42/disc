const questions = [
  {
    id: 1,
    text: "Tôi thích đứng đầu và chỉ đạo.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "D" },
      { text: "Không đồng ý", value: "D" },
      { text: "Đồng ý", value: "I" },
      { text: "Hoàn toàn đồng ý", value: "I" },
    ],
  },
  {
    id: 2,
    text: "Tôi thích giao tiếp với mọi người và xây dựng các mối quan hệ.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "S" },
      { text: "Không đồng ý", value: "S" },
      { text: "Đồng ý", value: "C" },
      { text: "Hoàn toàn đồng ý", value: "C" },
    ],
  },
  {
    id: 3,
    text: "Tôi thích một môi trường yên tĩnh và có thể dự đoán được.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "S" },
      { text: "Không đồng ý", value: "S" },
      { text: "Đồng ý", value: "C" },
      { text: "Hoàn toàn đồng ý", value: "C" },
    ],
  },
  {
    id: 4,
    text: "Tôi tập trung vào chi tiết và sự chính xác.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "C" },
      { text: "Không đồng ý", value: "C" },
      { text: "Đồng ý", value: "D" },
      { text: "Hoàn toàn đồng ý", value: "D" },
    ],
  },
  {
    id: 5,
    text: "Tôi thích thử thách và làm việc dưới áp lực.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "D" },
      { text: "Không đồng ý", value: "D" },
      { text: "Đồng ý", value: "I" },
      { text: "Hoàn toàn đồng ý", value: "I" },
    ],
  },
  {
    id: 6,
    text: "Tôi thích làm việc theo nhóm và cùng nhau đạt được mục tiêu.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "I" },
      { text: "Không đồng ý", value: "I" },
      { text: "Đồng ý", value: "S" },
      { text: "Hoàn toàn đồng ý", value: "S" },
    ],
  },
  {
    id: 7,
    text: "Tôi thường làm việc một cách cẩn thận và chính xác.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "C" },
      { text: "Không đồng ý", value: "C" },
      { text: "Đồng ý", value: "S" },
      { text: "Hoàn toàn đồng ý", value: "S" },
    ],
  },
  {
    id: 8,
    text: "Tôi thích làm việc theo kế hoạch và tuân theo quy trình.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "C" },
      { text: "Không đồng ý", value: "C" },
      { text: "Đồng ý", value: "D" },
      { text: "Hoàn toàn đồng ý", value: "D" },
    ],
  },
  {
    id: 9,
    text: "Tôi thích làm việc một cách độc lập và có thể tự ra quyết định.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "D" },
      { text: "Không đồng ý", value: "D" },
      { text: "Đồng ý", value: "I" },
      { text: "Hoàn toàn đồng ý", value: "I" },
    ],
  },
  {
    id: 10,
    text: "Tôi dễ dàng thích nghi với những thay đổi và thách thức mới.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "S" },
      { text: "Không đồng ý", value: "S" },
      { text: "Đồng ý", value: "C" },
      { text: "Hoàn toàn đồng ý", value: "C" },
    ],
  },
  {
    id: 11,
    text: "Tôi cảm thấy thoải mái khi làm việc với những con người có tính cách mạnh mẽ.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "D" },
      { text: "Không đồng ý", value: "D" },
      { text: "Đồng ý", value: "I" },
      { text: "Hoàn toàn đồng ý", value: "I" },
    ],
  },
  {
    id: 12,
    text: "Tôi tập trung vào việc duy trì sự ổn định và tránh rủi ro.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "S" },
      { text: "Không đồng ý", value: "S" },
      { text: "Đồng ý", value: "C" },
      { text: "Hoàn toàn đồng ý", value: "C" },
    ],
  },
  {
    id: 13,
    text: "Tôi có xu hướng tập trung vào công việc và đưa ra các quyết định dựa trên sự phân tích cẩn thận.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "D" },
      { text: "Không đồng ý", value: "D" },
      { text: "Đồng ý", value: "I" },
      { text: "Hoàn toàn đồng ý", value: "I" },
    ],
  },
  {
    id: 14,
    text: "Tôi thường làm việc dưới sự hướng dẫn hoặc giám sát của người khác.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "S" },
      { text: "Không đồng ý", value: "S" },
      { text: "Đồng ý", value: "C" },
      { text: "Hoàn toàn đồng ý", value: "C" },
    ],
  },
  {
    id: 15,
    text: "Tôi có xu hướng làm việc có tổ chức và tuân theo các nguyên tắc.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "C" },
      { text: "Không đồng ý", value: "C" },
      { text: "Đồng ý", value: "D" },
      { text: "Hoàn toàn đồng ý", value: "D" },
    ],
  },
  {
    id: 16,
    text: "Tôi dễ dàng kết nối với những người khác và tạo ra một bầu không khí tích cực.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "I" },
      { text: "Không đồng ý", value: "I" },
      { text: "Đồng ý", value: "S" },
      { text: "Hoàn toàn đồng ý", value: "S" },
    ],
  },
  {
    id: 17,
    text: "Tôi thích giao tiếp với nhiều người và là người dẫn đầu trong các cuộc trò chuyện.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "D" },
      { text: "Không đồng ý", value: "D" },
      { text: "Đồng ý", value: "I" },
      { text: "Hoàn toàn đồng ý", value: "I" },
    ],
  },
  {
    id: 18,
    text: "Tôi không ngại thử nghiệm và đưa ra các quyết định nhanh chóng.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "D" },
      { text: "Không đồng ý", value: "D" },
      { text: "Đồng ý", value: "I" },
      { text: "Hoàn toàn đồng ý", value: "I" },
    ],
  },
  {
    id: 19,
    text: "Tôi ưu tiên các quyết định chính xác và có hệ thống.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "C" },
      { text: "Không đồng ý", value: "C" },
      { text: "Đồng ý", value: "S" },
      { text: "Hoàn toàn đồng ý", value: "S" },
    ],
  },
  {
    id: 20,
    text: "Tôi cảm thấy thoải mái khi đối mặt với những tình huống không chắc chắn.",
    answers: [
      { text: "Hoàn toàn không đồng ý", value: "S" },
      { text: "Không đồng ý", value: "S" },
      { text: "Đồng ý", value: "C" },
      { text: "Hoàn toàn đồng ý", value: "C" },
    ],
  },
];
export default questions;
