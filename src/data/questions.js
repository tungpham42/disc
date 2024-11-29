const questions = [
  {
    id: 1,
    text: "Tôi thích đứng đầu và chỉ đạo.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "D" },
      { point: 1, text: "Không đồng ý", value: "D" },
      { point: 1, text: "Đồng ý", value: "I" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "I" },
    ],
  },
  {
    id: 2,
    text: "Tôi thích giao tiếp với mọi người và xây dựng các mối quan hệ.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "S" },
      { point: 1, text: "Không đồng ý", value: "S" },
      { point: 1, text: "Đồng ý", value: "C" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "C" },
    ],
  },
  {
    id: 3,
    text: "Tôi thích một môi trường yên tĩnh và có thể dự đoán được.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "S" },
      { point: 1, text: "Không đồng ý", value: "S" },
      { point: 1, text: "Đồng ý", value: "C" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "C" },
    ],
  },
  {
    id: 4,
    text: "Tôi tập trung vào chi tiết và sự chính xác.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "C" },
      { point: 1, text: "Không đồng ý", value: "C" },
      { point: 1, text: "Đồng ý", value: "D" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "D" },
    ],
  },
  {
    id: 5,
    text: "Tôi thích thử thách và làm việc dưới áp lực.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "D" },
      { point: 1, text: "Không đồng ý", value: "D" },
      { point: 1, text: "Đồng ý", value: "I" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "I" },
    ],
  },
  {
    id: 6,
    text: "Tôi thích làm việc theo nhóm và cùng nhau đạt được mục tiêu.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "I" },
      { point: 1, text: "Không đồng ý", value: "I" },
      { point: 1, text: "Đồng ý", value: "S" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "S" },
    ],
  },
  {
    id: 7,
    text: "Tôi thường làm việc một cách cẩn thận và chính xác.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "C" },
      { point: 1, text: "Không đồng ý", value: "C" },
      { point: 1, text: "Đồng ý", value: "S" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "S" },
    ],
  },
  {
    id: 8,
    text: "Tôi thích làm việc theo kế hoạch và tuân theo quy trình.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "C" },
      { point: 1, text: "Không đồng ý", value: "C" },
      { point: 1, text: "Đồng ý", value: "D" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "D" },
    ],
  },
  {
    id: 9,
    text: "Tôi thích làm việc một cách độc lập và có thể tự ra quyết định.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "D" },
      { point: 1, text: "Không đồng ý", value: "D" },
      { point: 1, text: "Đồng ý", value: "I" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "I" },
    ],
  },
  {
    id: 10,
    text: "Tôi dễ dàng thích nghi với những thay đổi và thách thức mới.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "S" },
      { point: 1, text: "Không đồng ý", value: "S" },
      { point: 1, text: "Đồng ý", value: "C" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "C" },
    ],
  },
  {
    id: 11,
    text: "Tôi cảm thấy thoải mái khi làm việc với những con người có tính cách mạnh mẽ.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "D" },
      { point: 1, text: "Không đồng ý", value: "D" },
      { point: 1, text: "Đồng ý", value: "I" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "I" },
    ],
  },
  {
    id: 12,
    text: "Tôi tập trung vào việc duy trì sự ổn định và tránh rủi ro.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "S" },
      { point: 1, text: "Không đồng ý", value: "S" },
      { point: 1, text: "Đồng ý", value: "C" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "C" },
    ],
  },
  {
    id: 13,
    text: "Tôi có xu hướng tập trung vào công việc và đưa ra các quyết định dựa trên sự phân tích cẩn thận.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "D" },
      { point: 1, text: "Không đồng ý", value: "D" },
      { point: 1, text: "Đồng ý", value: "I" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "I" },
    ],
  },
  {
    id: 14,
    text: "Tôi thường làm việc dưới sự hướng dẫn hoặc giám sát của người khác.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "S" },
      { point: 1, text: "Không đồng ý", value: "S" },
      { point: 1, text: "Đồng ý", value: "C" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "C" },
    ],
  },
  {
    id: 15,
    text: "Tôi có xu hướng làm việc có tổ chức và tuân theo các nguyên tắc.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "C" },
      { point: 1, text: "Không đồng ý", value: "C" },
      { point: 1, text: "Đồng ý", value: "D" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "D" },
    ],
  },
  {
    id: 16,
    text: "Tôi dễ dàng kết nối với những người khác và tạo ra một bầu không khí tích cực.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "I" },
      { point: 1, text: "Không đồng ý", value: "I" },
      { point: 1, text: "Đồng ý", value: "S" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "S" },
    ],
  },
  {
    id: 17,
    text: "Tôi thích giao tiếp với nhiều người và là người dẫn đầu trong các cuộc trò chuyện.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "D" },
      { point: 1, text: "Không đồng ý", value: "D" },
      { point: 1, text: "Đồng ý", value: "I" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "I" },
    ],
  },
  {
    id: 18,
    text: "Tôi không ngại thử nghiệm và đưa ra các quyết định nhanh chóng.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "D" },
      { point: 1, text: "Không đồng ý", value: "D" },
      { point: 1, text: "Đồng ý", value: "I" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "I" },
    ],
  },
  {
    id: 19,
    text: "Tôi ưu tiên các quyết định chính xác và có hệ thống.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "C" },
      { point: 1, text: "Không đồng ý", value: "C" },
      { point: 1, text: "Đồng ý", value: "S" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "S" },
    ],
  },
  {
    id: 20,
    text: "Tôi cảm thấy thoải mái khi đối mặt với những tình huống không chắc chắn.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "S" },
      { point: 1, text: "Không đồng ý", value: "S" },
      { point: 1, text: "Đồng ý", value: "C" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "C" },
    ],
  },
  {
    id: 21,
    text: "Tôi thích làm việc với những người sáng tạo và đưa ra ý tưởng mới.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "I" },
      { point: 1, text: "Không đồng ý", value: "I" },
      { point: 1, text: "Đồng ý", value: "D" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "D" },
    ],
  },
  {
    id: 22,
    text: "Tôi cảm thấy thoải mái khi giải quyết các tình huống phức tạp và không rõ ràng.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "C" },
      { point: 1, text: "Không đồng ý", value: "C" },
      { point: 1, text: "Đồng ý", value: "S" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "S" },
    ],
  },
  {
    id: 23,
    text: "Tôi thích phát triển các kỹ năng cá nhân và học hỏi từ kinh nghiệm.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "I" },
      { point: 1, text: "Không đồng ý", value: "I" },
      { point: 1, text: "Đồng ý", value: "D" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "D" },
    ],
  },
  {
    id: 24,
    text: "Tôi ưu tiên công việc có thể hoàn thành nhanh chóng và hiệu quả.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "C" },
      { point: 1, text: "Không đồng ý", value: "C" },
      { point: 1, text: "Đồng ý", value: "S" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "S" },
    ],
  },
  {
    id: 25,
    text: "Tôi thích những tình huống thử thách và có thể đẩy mình đến giới hạn.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "D" },
      { point: 1, text: "Không đồng ý", value: "D" },
      { point: 1, text: "Đồng ý", value: "I" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "I" },
    ],
  },
  {
    id: 26,
    text: "Tôi cảm thấy hứng thú khi được giao nhiệm vụ mới và không có sự giám sát chặt chẽ.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "D" },
      { point: 1, text: "Không đồng ý", value: "D" },
      { point: 1, text: "Đồng ý", value: "I" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "I" },
    ],
  },
  {
    id: 27,
    text: "Tôi thích làm việc trong một môi trường đòi hỏi sự sáng tạo và đổi mới.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "I" },
      { point: 1, text: "Không đồng ý", value: "I" },
      { point: 1, text: "Đồng ý", value: "D" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "D" },
    ],
  },
  {
    id: 28,
    text: "Tôi thấy thoải mái khi làm việc trong môi trường có sự thay đổi liên tục và khối lượng công việc lớn.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "S" },
      { point: 1, text: "Không đồng ý", value: "S" },
      { point: 1, text: "Đồng ý", value: "C" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "C" },
    ],
  },
  {
    id: 29,
    text: "Tôi luôn tìm kiếm cơ hội để phát triển và nâng cao năng lực của bản thân.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "I" },
      { point: 1, text: "Không đồng ý", value: "I" },
      { point: 1, text: "Đồng ý", value: "D" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "D" },
    ],
  },
  {
    id: 30,
    text: "Tôi thường xuyên làm việc với các con số và phân tích dữ liệu để đưa ra quyết định.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "C" },
      { point: 1, text: "Không đồng ý", value: "C" },
      { point: 1, text: "Đồng ý", value: "S" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "S" },
    ],
  },
  {
    id: 31,
    text: "Tôi cảm thấy thích thú với việc tạo ra các chiến lược dài hạn và nhìn xa hơn về tương lai.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "I" },
      { point: 1, text: "Không đồng ý", value: "I" },
      { point: 1, text: "Đồng ý", value: "D" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "D" },
    ],
  },
  {
    id: 32,
    text: "Tôi dễ dàng thích nghi với những thay đổi trong công việc và môi trường xung quanh.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "C" },
      { point: 1, text: "Không đồng ý", value: "C" },
      { point: 1, text: "Đồng ý", value: "S" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "S" },
    ],
  },
  {
    id: 33,
    text: "Tôi luôn tìm cách để cải thiện hiệu suất và tìm ra phương pháp làm việc hiệu quả hơn.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "S" },
      { point: 1, text: "Không đồng ý", value: "S" },
      { point: 1, text: "Đồng ý", value: "C" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "C" },
    ],
  },
  {
    id: 34,
    text: "Tôi thích làm việc trong những môi trường không quá nhiều quy định và có thể tự do sáng tạo.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "I" },
      { point: 1, text: "Không đồng ý", value: "I" },
      { point: 1, text: "Đồng ý", value: "D" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "D" },
    ],
  },
  {
    id: 35,
    text: "Tôi cảm thấy tự hào khi giúp đỡ người khác và làm việc vì lợi ích của cộng đồng.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "S" },
      { point: 1, text: "Không đồng ý", value: "S" },
      { point: 1, text: "Đồng ý", value: "C" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "C" },
    ],
  },
  {
    id: 36,
    text: "Tôi cảm thấy an toàn khi làm việc với những người đáng tin cậy và có kỷ luật.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "D" },
      { point: 1, text: "Không đồng ý", value: "D" },
      { point: 1, text: "Đồng ý", value: "I" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "I" },
    ],
  },
  {
    id: 37,
    text: "Tôi tìm kiếm những cơ hội mới để phát triển bản thân và cải thiện kỹ năng chuyên môn.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "C" },
      { point: 1, text: "Không đồng ý", value: "C" },
      { point: 1, text: "Đồng ý", value: "S" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "S" },
    ],
  },
  {
    id: 38,
    text: "Tôi yêu thích việc khám phá và thử nghiệm những ý tưởng hoặc phương pháp mới.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "I" },
      { point: 1, text: "Không đồng ý", value: "I" },
      { point: 1, text: "Đồng ý", value: "D" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "D" },
    ],
  },
  {
    id: 39,
    text: "Tôi cảm thấy thoải mái khi làm việc dưới áp lực và với thời gian chặt chẽ.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "C" },
      { point: 1, text: "Không đồng ý", value: "C" },
      { point: 1, text: "Đồng ý", value: "S" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "S" },
    ],
  },
  {
    id: 40,
    text: "Tôi thích nghiên cứu và tìm hiểu sâu về các vấn đề phức tạp.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "D" },
      { point: 1, text: "Không đồng ý", value: "D" },
      { point: 1, text: "Đồng ý", value: "I" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "I" },
    ],
  },
  {
    id: 41,
    text: "Tôi cảm thấy dễ dàng làm việc với các nhóm và luôn tìm cách để hòa hợp với các thành viên.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "S" },
      { point: 1, text: "Không đồng ý", value: "S" },
      { point: 1, text: "Đồng ý", value: "C" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "C" },
    ],
  },
  {
    id: 42,
    text: "Tôi có khả năng nhìn thấy bức tranh tổng thể và làm việc để đạt được mục tiêu dài hạn.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "I" },
      { point: 1, text: "Không đồng ý", value: "I" },
      { point: 1, text: "Đồng ý", value: "D" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "D" },
    ],
  },
  {
    id: 43,
    text: "Tôi thích giải quyết các vấn đề bằng cách sử dụng các dữ liệu thực tế và phân tích logic.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "C" },
      { point: 1, text: "Không đồng ý", value: "C" },
      { point: 1, text: "Đồng ý", value: "S" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "S" },
    ],
  },
  {
    id: 44,
    text: "Tôi luôn tìm cách học hỏi từ những sai lầm và cải thiện bản thân qua từng trải nghiệm.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "I" },
      { point: 1, text: "Không đồng ý", value: "I" },
      { point: 1, text: "Đồng ý", value: "D" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "D" },
    ],
  },
  {
    id: 45,
    text: "Tôi cảm thấy tự tin khi phải đưa ra quyết định quan trọng và chịu trách nhiệm về các lựa chọn của mình.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "S" },
      { point: 1, text: "Không đồng ý", value: "S" },
      { point: 1, text: "Đồng ý", value: "C" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "C" },
    ],
  },
  {
    id: 46,
    text: "Tôi dễ dàng thích nghi với công việc mới và có thể làm việc hiệu quả trong môi trường thay đổi liên tục.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "C" },
      { point: 1, text: "Không đồng ý", value: "C" },
      { point: 1, text: "Đồng ý", value: "S" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "S" },
    ],
  },
  {
    id: 47,
    text: "Tôi có xu hướng tránh những thay đổi lớn và cảm thấy an tâm với những gì đã được thiết lập.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "I" },
      { point: 1, text: "Không đồng ý", value: "I" },
      { point: 1, text: "Đồng ý", value: "D" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "D" },
    ],
  },
  {
    id: 48,
    text: "Tôi thích làm việc với các kế hoạch chi tiết và dự phòng, để đảm bảo mọi việc diễn ra theo đúng kế hoạch.",
    answers: [
      { point: 2, text: "Hoàn toàn không đồng ý", value: "D" },
      { point: 1, text: "Không đồng ý", value: "D" },
      { point: 1, text: "Đồng ý", value: "C" },
      { point: 2, text: "Hoàn toàn đồng ý", value: "C" },
    ],
  },
];
export default questions;
