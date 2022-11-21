// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: 'Công tác nào nêu sau không phải công tác trắc địa?',
    answer: 'Khoan khảo sát địa chất',
    options: [
      'Đo khảo sát để tính toán khối lượng đào đắp',
      'Khoan khảo sát địa chất',
      'Đo chênh cao giữa hai điểm',
      'Bố trí vị trí của một điểm phục vụ thi công công trình',
    ],
  },
  {
    numb: 2,
    question:
      'Trong các tính chất sau, tính chất nào không đúng với mặt Geoid:',
    answer: 'Là một mặt toán học',
    options: [
      'Là một mặt cong khép kín',
      'Có bề mặt gợn sóng',
      'Phương của trọng lực vuông góc với mặt Geoid tại mọi điểm trên mặt đất',
      'Là một mặt toán học',
    ],
  },
  {
    numb: 3,
    question: 'Mặt thủy chuẩn được dùng làm:',
    answer: 'Cơ sở để xác định độ cao của một điểm trên mặt đất',
    options: [
      'Cơ sở để xác định tọa độ của một điểm bất kỳ trên mặt đất',
      'Cơ sở để xác định độ cao của một điểm trên mặt đất',
      'Để giải tất cả các bài toán trắc địa trên mặt đất',
      'Làm mặt cong toán học',
    ],
  },
  {
    numb: 4,
    question:
      'Các đại lượng nào sau đây thể hiện thông số của Ellipsoid Trái đất:',
    answer: 'Các câu còn lại đúng',
    options: [
      'Bán trục lớn a',
      'Bán trục nhỏ b',
      'Độ dẹt α',
      'Các câu còn lại đúng',
    ],
  },
  {
    numb: 5,
    question: 'Để lập hệ toạ độ quốc gia VN-2000, Việt Nam dùng:',
    answer: 'Ellipsoid WGS-84 từ năm 2000',
    options: [
      'Ellipsoid krasovski từ năm 1972',
      'Ellipsoid krasovski từ năm 2000',
      'Ellipsoid WGS-84 từ năm 2000',
      'Ellipsoid WGS-84 từ năm 1972',
    ],
  },
  {
    numb: 6,
    question:
      'Điểm độ cao gốc (Ho = 0m) của Việt Nam hiện tại  được lấy đi qua đâu?',
    answer: 'Trạm nghiệm triều ở Hòn Dấu, Đồ Sơn, Hải Phòng',
    options: [
      'Trạm nghiệm triều Mũi Nai, Hà Tiên, Kiêng Giang',
      'Mũi điện – Phú Yên',
      'Trạm nghiệm triều ở Hòn Dấu, Đồ Sơn, Hải Phòng',
      'Thủ đô Hà Nội',
    ],
  },
  {
    numb: 7,
    question:
      'Để tính độ cao thường người ta dựa vào bề mặt nào làm cơ sở tính:',
    answer: 'Geoid',
    options: ['Elipxoid ', 'Geoid', 'Cầu', 'Phẳng'],
  },
  {
    numb: 8,
    question: 'Trong hệ tọa độ địa lý nhận quả đất là hình gì?',
    answer: 'Hình cầu',
    options: ['Hình elíp', 'Hình tròn', 'Hình cầu', 'Hình ô van'],
  },
  {
    numb: 9,
    question: 'Hệ tọa độ địa lý thống nhất trên phạm vi:',
    answer: 'Toàn cầu',
    options: ['Từng địa phương', 'Từng quốc gia', 'Từng châu lục', 'Toàn cầu'],
  },
  {
    numb: 10,
    question: 'Kinh tuyến gốc của Trái đất đi qua:',
    answer: 'Đài thiên văn Greenwich của nước Anh',
    options: [
      'Đài thiên văn Greenwich của nước Mỹ',
      'Đài thiên văn Greenwich của nước Đức',
      'Đài thiên văn Greenwich của nước Anh',
      'Đài thiên văn Greenwich của Ai Cập',
    ],
  },
  {
    numb: 11,
    question: 'Vĩ tuyến gốc của Trái đất là vĩ tuyến:',
    answer:
      'Có kích thước lớn nhất chia đôi trái đất thành 2 phần Bắc và Nam bán cầu',
    options: [
      'Có kích thước lớn nhất chia đôi trái đất thành 2 phần Bắc và Nam bán cầu',
      'Đi qua đài thiên văn Greenwich của nước Anh có vĩ độ là 0 độ',
      'Có chiều dài nhỏ nhất',
      'Có chiều dài bằng trung bình chiều dài tất cả các đường vĩ tuyến',
    ],
  },
  {
    numb: 12,
    question:
      'Vĩ độ địa lý của điểm M là góc có đỉnh O (tâm Trái đất) hợp bởi:',
    answer:
      'Phương đi qua M và tâm trái đất với mặt phẳng xích đạo có giá trị từ 0 độ đến 90 độ',
    options: [
      'Phương đi qua M và tâm trái đất với mặt phẳng xích đạo có giá trị từ 0 độ đến 90 độ',
      'Phương của dây dọi qua M với mặt phẳng xích đạo có giá trị từ 0 độ đến 180 độ',
      'Phương của pháp tuyến qua M với mặt phẳng xích đạo có giá trị từ 0 độ đến 180 độ',
      'Phương của trọng lực qua M với mặt phẳng xích đạo có giá trị từ 0 độ đến 360 độ',
    ],
  },
  {
    numb: 13,
    question: 'Kinh độ địa lý của điểm M là:',
    answer:
      'Góc nhị diện hợp bởi mặt phẳng kinh tuyến gốc Greenwich và mặt phẳng kinh tuyến đi qua M',
    options: [
      'Góc hợp bởi kinh tuyến gốc và kinh tuyến đi qua M',
      'Góc hợp bởi đường nối tâm trái đất đi qua M và mặt phẳng xích đạo',
      'Góc nhị diện hợp bởi mặt phẳng kinh tuyến gốc Greenwich và mặt phẳng kinh tuyến đi qua M',
      'Góc hợp bởi mặt phẳng xích đạo và mặt phẳng kinh tuyến gốc',
    ],
  },
  {
    numb: 14,
    question: 'Hệ tọa độ Trắc địa coi Trái đất là hình:',
    answer: 'Ellipxoid',
    options: ['Cầu', 'Ellipxoid', 'Lồi lõm bất kỳ', 'Geoid'],
  },
  {
    numb: 15,
    question:
      'Khi xem trái đất là mặt cầu tâm O bán kính 6400km, 2 điểm A và B nằm trên trái đất có độ dài cung tròn là 1234 km, kết luận nào sau đây đúng:',
    answer: 'Góc AOB = 0,192813 rad',
    options: [
      'Góc AOB = 0 độ 11 phút 34 giây',
      'Ellipsoid krasovski từ năm 2000',
      'Góc AOB = 0,192813 độ',
      'Góc AOB = 0,192813 rad',
    ],
  },
  {
    numb: 16,
    question: 'Trong phép chiếu Gauss-Kruger múi chiếu 6o, múi số 01 là múi:',
    answer: 'Có đường Kinh tuyến Tây là đường kinh tuyến 0 độ',
    options: [
      'Có đường kinh tuyến tây là đường kinh tuyến 174 độ Đông',
      'Có đường kinh tuyến Tây là đường kinh tuyến 6 độ Tây',
      'Có đường kinh tuyến Tây là đường kinh tuyến 180 độ',
      'Có đường Kinh tuyến Tây là đường kinh tuyến 0 độ',
    ],
  },
  {
    numb: 17,
    question: 'Trong phép chiếu UTM múi chiếu 6 độ, múi số 01 là múi:',
    answer: 'Có đường kinh tuyến Tây là đường kinh tuyến 180 độ',
    options: [
      'Có đường Kinh tuyến Tây là đường kinh tuyến 0 độ',
      'Có đường kinh tuyến Tây là đường kinh tuyến 180 độ',
      'Có đường kinh tuyến Tây là đường kinh tuyến 6 độ Tây',
      'Có đường kinh tuyến tây là đường kinh tuyến 174 độ Đông',
    ],
  },
  {
    numb: 18,
    question: 'Phát biểu nào sau đây không đúng về phép chiếu UTM?',
    answer: 'Đường kính của lăng trụ trong phép chiếu bằng đường kính trái đất',
    options: [
      'Đường kính của lăng trụ trong phép chiếu bằng đường kính trái đất',
      'Là phép chiếu có mặt chuẩn là hình lăng trụ đặt nằm ngang',
      'Đường kính của lăng trụ trong phép chiếu nhỏ hơn đường kính trái đất',
      'Múi số 01 có đường kinh tuyến Tây là đường kinh tuyến 180 độ',
    ],
  },
  {
    numb: 19,
    question: 'Phép chiếu UTM múi chiếu 6o chia Trái đất thành:',
    answer: '60 múi',
    options: ['70 múi', '60 múi', '80 múi', '120 múi'],
  },
  {
    numb: 20,
    question: 'Tính chất hình chiếu nào sau đây đúng trong phép chiếu UTM?',
    answer: 'Độ dài hình chiếu hai cát tuyến bằng độ dài thực',
    options: [
      'Độ dài hình chiếu kinh tuyến giữa bằng độ dài thực',
      'Độ dài hình chiếu kinh tuyến biên bằng độ dài thực',
      'Độ dài hình chiếu hai cát tuyến bằng độ dài thực',
      'Hình chiếu kinh tuyến giữa trở thành trục nằm ngang',
    ],
  },
  {
    numb: 21,
    question: 'Trong phép chiếu UTM tính chất nào sai:',
    answer: 'Kinh tuyến giữa của múi chiếu không bị biến dạng về chiều dài',
    options: [
      'Kinh tuyến giữa của múi chiếu không bị biến dạng về chiều dài',
      'Trong phép chiếu này hình trụ ngang có bán kính nhỏ hơn bán kính Trái đất',
      'Là phép chiếu hình trụ ngang đồng góc',
      'Hai kinh tuyến biên ngoài cùng của múi chiếu bị biến dạng chiều dài',
    ],
  },
  {
    numb: 22,
    question: 'Trong phép chiếu UTM, phát biểu nào sau đây là sai:',
    answer: 'Cả ba câu còn lại đều sai',
    options: [
      'Trong phép chiếu các góc được bảo toàn',
      'Độ biến dạng được phân bố đều hơn và có trị số nhỏ hơn so với phép chiếu Gauss',
      'Trong phép chiếu này hình trụ cắt múi chiếu tại 2 cát tuyến',
      'Cả ba câu còn lại đều sai',
    ],
  },
  {
    numb: 23,
    question:
      'Cách nào sau đây dùng để giảm sai số do biến dạng chiều dài trong phép chiếu UTM?',
    answer: 'Chia múi chiếu 6 độ thành các múi chiếu nhỏ hơn',
    options: [
      'Xem Trái đất là mặt phẳng nằm ngang',
      'Chọn trục X nằm cách xa khu đo',
      'Chia múi chiếu 6 độ thành các múi chiếu nhỏ hơn',
      'Chọn hệ trục tọa độ giả định sao cho gốc tọa độ nằm ở góc Tây Nam bản đồ',
    ],
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  {
    numb: 24,
    question: 'Trong hệ tọa độ vuông góc Gauss người ta quy định trục X là:',
    answer: 'Hình chiếu kinh tuyến giữa dời về phía Tây một đoạn 500km',
    options: [
      'Hình chiếu kinh tuyến bất kỳ',
      'Hình chiếu kinh tuyến giữa dời về phía Tây một đoạn 500km',
      'Hình chiếu kinh tuyến gốc dời về phía Tây một đoạn 500km',
      'Hình chiếu kinh tuyến biên',
    ],
  },
  {
    numb: 25,
    question:
      'Trong hệ tọa độ vuông góc UTM người ta quy định trục X là đường song song với:',
    answer: 'Hình chiếu kinh tuyến giữa',
    options: [
      'Hình chiếu kinh tuyến gốc',
      'Hình chiếu kinh tuyến biên',
      'Hình chiếu kinh tuyến bất kỳ',
      'Hình chiếu kinh tuyến giữa',
    ],
  },
  {
    numb: 26,
    question:
      'Trong hệ tọa độ vuông góc phẳng UTM, để tọa độ Y không âm người ta quy ước dời trục X về phía Tây kinh tuyến trục:',
    answer: '500 km',
    options: ['333 km', '400 km', '500 km', '550 km'],
  },
  {
    numb: 27,
    question: 'Hệ tọa độ quốc gia Việt Nam hiện nay có tên gọi là hệ:',
    answer: 'VN - 2000',
    options: ['VN - 2000', 'Vn - 72', 'HN - 72', 'VN - 2020'],
  },
  {
    numb: 28,
    question: 'Hệ tọa độ VN – 2000 sử dụng phép chiếu bản đồ nào:',
    answer: 'UTM',
    options: ['Gauss', 'Phương vị', 'UTM', 'Gauss và UTM'],
  },
  {
    numb: 29,
    question: 'Điểm gốc cấp “0” của hệ tọa độ VN-2000 có vị trí ở:',
    answer:
      'Khuôn viên Viện nghiên cứu địa chính Hà Nội nay là Viện Khoa học đo đạc bản đồ',
    options: [
      'Hà Tiên',
      'Hòn Dấu - Hải Phòng',
      'Khuôn viên Viện nghiên cứu địa chính Hà Nội nay là Viện Khoa học đo đạc bản đồ',
      'Khuôn viên Bộ tài nguyên môi trường',
    ],
  },
  {
    numb: 30,
    question:
      'Trong hệ tọa độ vuông góc giả định, để tránh trị số x và y mang dấu âm người ta thường chọn gốc tọa độ nằm ở:',
    answer: 'Góc Tây Nam của khu đo',
    options: [
      'Góc Tây Nam của khu đo',
      'Góc Đông Nam của khu đo',
      'Góc Đông Bắc của khu đo',
      'Góc Tây Bắc của khu đo',
    ],
  },
  {
    numb: 31,
    question:
      'Khi dùng hệ tọa độ cực trong trắc địa, vị trí của điểm M được xác định bởi:',
    answer: 'Góc bằng βM, cạnh cực SM',
    options: [
      'Vĩ độ λM và kinh độ φM',
      'Toạ độ XM YM',
      'Góc bằng βM, cạnh cực SM',
      'Góc đứng VM, cạnh cực SM',
    ],
  },
  {
    numb: 32,
    question:
      'Hệ toạ độ dùng một điểm gốc và một hướng làm chuẩn, xác định vị trí 1 điểm dựa vào 2 đại lượng là góc bằng và khoảng cách gọi là:',
    answer: 'Hệ tọa độ cực',
    options: [
      'Hệ toạ độ cực',
      'Hệ tọa độ địa lý',
      'Hệ tọa độ trắc địa',
      'Hệ tọa độ vuông góc',
    ],
  },
  {
    numb: 33,
    question:
      'Kinh độ của đường kinh tuyến Đông, múi chiếu thứ 12 trong phép chiếu Gauss-Kruger múi chiếu 6 độ là:',
    answer: '72 độ Đông',
    options: ['27 độ Đông', '72 độ Đông', '72 độ Tây', '108 độ Tây'],
  },
  {
    numb: 34,
    question:
      'Tính kinh độ của đường kinh tuyến Đông, múi chiếu thứ 12 trong phép chiếu UTM múi chiếu 6 độ là:',
    answer: '108 độ Tây',
    options: ['72 độ Tây', '27 độ Đông', '72 độ Đông', '108 độ Tây'],
  },
  {
    numb: 35,
    question:
      'Xác định kinh của độ kinh tuyến giữa của múi chiếu thứ 44 trong phép chiếu UTM mỗi múi chiếu 6 độ',
    answer: '81 độ Đông',
    options: ['87 độ Đông', '81 độ Đông', '84 độ Đông', '82 độ Đông'],
  },
  {
    numb: 36,
    question:
      'Góc phương vị thật của đường thẳng tại một điểm là góc A^(th) tính từ?',
    answer:
      'Hướng bắc kinh tuyến thật đi qua điểm đó thuận kim đồng hồ tới đường thẳng, có giá trị từ 0 ÷  360 độ',
    options: [
      'Hướng bắc kinh tuyến thật đi qua điểm đó thuận kim đồng hồ tới đường thẳng, có giá trị từ 0 ÷  360 độ',
      'Hướng bắc của hình chiếu kinh tuyến trục thuận kim đồng hồ tới đường thẳng, có giá trị từ 0 ÷ 360 độ',
      'Kinh tuyến thực đi qua điểm đó tới đường thẳng và có giá trị từ 0 ÷ 360 độ',
      'Kinh tuyến thực đi qua điểm đó theo kim đồng hồ tới đường thẳng và có giá trị từ 0 ÷ 360 độ',
    ],
  },
  {
    numb: 37,
    question:
      'Trong trắc địa, để tính góc phương vị tọa độ (Góc định hướng) của đường thẳng người ta dùng hướng nào làm chuẩn?',
    answer: 'Hướng bắc hình chiếu kinh tuyến trục',
    options: [
      'Hướng bắc kinh tuyến thật',
      'Hướng bắc kinh tuyến từ',
      'Hướng bắc hình chiếu kinh tuyến trục',
      'Hướng Bắc hay Nam đều được',
    ],
  },
  {
    numb: 38,
    question: 'Góc định hướng có trị số nằm trong khoảng?',
    answer: '0 độ đến 360 độ',
    options: [
      '0 độ đến 180 độ',
      '0 độ đến 90 độ',
      '0 độ đến 270 độ',
      '0 độ đến 360 độ',
    ],
  },
  {
    numb: 39,
    question:
      'Biết góc phương vị tọa độ (góc định hướng) cạnh AB là αAB, để xác định được góc phương vị tọa độ αBC của cạnh BC cần xác định?',
    answer: 'Góc bằng β giữa hai cạnh AB và BC',
    options: [
      'Góc ABC',
      'Góc bằng β giữa hai cạnh AB và BC',
      'Góc bằng và góc đứng ABC',
      'Góc ABC đo thuận chiều kim đồng hồ',
    ],
  },
  {
    numb: 40,
    question:
      'Cho A (1345,23m; 1234,34m); dAB = 200,22m; αAB = 100 độ 12 phút 22 giây Toạ độ điểm B là?',
    answer: 'XB = 1309,76 (m); YB = 1431,39 (m)',
    options: [
      'XB = 1309,76 (m); YB = 1431,39 (m)',
      'XB = 1390,76 (m); YB = 1413,39 (m)',
      'XB = 1309,76 (m); YB = 1413,39 (m)',
      'XB = 1390,76 (m); YB = 1431,39 (m)',
    ],
  },
  {
    numb: 41,
    question:
      'Bình đồ biểu thị một khu đất nhỏ theo phép chiếu hình đơn giản có những đặc điểm?',
    answer: 'Các đáp án còn lại đúng',
    options: [
      'Coi mặt quy chiếu toạ độ và độ cao là mặt phẳng nằm ngang',
      'Thường có tỷ lệ lớn',
      'Có thể không sử dụng hệ toạ độ, độ cao Nhà nước',
      'Các đáp án còn lại đúng',
    ],
  },
  {
    numb: 42,
    question: 'Đặc điểm khác nhau giữa Bản đồ và bình đồ?',
    answer:
      'Bản đồ có xét đến ảnh hưởng của độ cong Trái đất, bình đồ thì bỏ qua',
    options: [
      'Bản đồ thể hiện địa vật và không thể hiện địa hình, bình đồ thể hiện cả hai',
      'Bản đồ được lưu ở dạng số còn bình đồ thì không',
      'Bản đồ có xét đến ảnh hưởng của độ cong Trái đất, bình đồ thì bỏ qua',
      'Bản đồ chính xác hơn bình đồ',
    ],
  },
  {
    numb: 43,
    question: 'Khi vẽ mặt cắt dọc của địa hình người ta thường:',
    answer: 'Thể hiện tỷ lệ đứng lớn hơn tỷ lệ ngang 10 lần',
    options: [
      'Thể hiện tỷ lệ đứng lớn hơn tỷ lệ ngang 10 lần',
      'Thể hiện tỷ lệ đứng bằng tỷ lệ ngang',
      'Thể hiện tỷ lệ ngang lớn hơn tỷ lệ đứng 10 lần',
      'Thu nhỏ phương ngang, phương đứng giữ nguyên tỷ lệ',
    ],
  },
  {
    numb: 44,
    question: 'Khi vẽ mặt cắt ngang của địa hình người ta thường:',
    answer: 'Thể hiện tỷ lệ đứng bằng tỷ lệ ngang',
    options: [
      'Thể hiện tỷ lệ đứng lớn hơn tỷ lệ ngang 10 lần',
      'Thể hiện tỷ lệ đứng bằng tỷ lệ ngang',
      'Thể hiện tỷ lệ ngang lớn hơn tỷ lệ đứng 10 lần',
      'Thu nhỏ phương ngang, phương đứng giữ nguyên tỷ lệ',
    ],
  },
  {
    numb: 45,
    question: 'Tỷ lệ bản đồ (1/M) = (d/D) trong đó (d) và (D) lần lượt là?',
    answer:
      'Khoảng cách trên bản đồ và khoảng cách theo phương ngang ngoài thực địa tương ứng',
    options: [
      'Khoảng cách trên bản đồ và khoảng cách theo phương ngiêng ngoài thực địa tương ứng',
      'Khoảng cách trên bản đồ và khoảng cách theo phương đứng ngoài thực địa tương ứng',
      'Khoảng cách trên bản đồ và khoảng cách theo phương ngang ngoài thực địa tương ứng',
      'Khoảng cách trên bản đồ và khoảng cách ngoài thực địa',
    ],
  },
  {
    numb: 46,
    question: 'Phát biểu nào sau đây đúng về bình đồ đường đống mức?',
    answer: 'Các đường đồng mức càng xít vào nhau thì địa hình càng dốc ',
    options: [
      'Các đường đồng mức càng cách xa nhau thì địa hình càng dốc',
      'Đường đồng mức càng cong thì địa hình càng dốc',
      'Các đường đồng mức càng xít vào nhau thì địa hình càng dốc',
      'Hướng của đường thẳng xa nhất nối giữa 2 đường đồng mức kề nhau là hướng dốc nhất',
    ],
  },
  {
    numb: 47,
    question: 'Tìm phương án sai:',
    answer:
      'Đường đồng mức là những đường cong rời rạc, không cắt nhau và không khép kín',
    options: [
      'Khi khoảng cách giữa các đường đồng mức thưa, độ dốc mặt đất tại khu vực này nhỏ',
      'Các đường đồng mức cắt nhau trong trường hợp dạng hang động, hàm ếch ',
      'Đường đồng mức là những đường cong liên tục, khép kín',
      'Đường đồng mức là những đường cong rời rạc, không cắt nhau và không khép kín',
    ],
  },
  {
    numb: 48,
    question:
      'Chia mảnh và đánh số bản đồ địa hình Việt Nam được bắt đầu từ tờ bản đồ có tỷ lệ?',
    answer: '1/1.000.000',
    options: ['1/2.000.000', '1/100.000', '1/1.000.000', '1/500.000'],
  },
  {
    numb: 49,
    question: 'Mảnh bản đồ F-49-3 có tỷ lệ?',
    answer: '1/100.000',
    options: ['1/500.000', '1/100.000', '1/250.000', '1/1.000.000'],
  },
  {
    numb: 50,
    question: 'Phát biểu nào sau đây là không đúng trong Trắc địa?',
    answer:
      'Trị đo trực tiếp được xác định thông qua tính toán từ trị đo gián tiếp',
    options: [
      'Trị đo trực tiếp được xác định thông qua tính toán từ trị đo gián tiếp',
      'Đo trực tiếp là trực tiếp xác định độ lớn của đại lượng đo bằng các dụng cụ đo',
      'Trị đo gián tiếp được xác định qua tính toán từ trị đo khác',
      'Trị được toán đại lượng đo từ các kết quả đo trực tiếp là trị đo gián tiếp',
    ],
  },
  {
    numb: 51,
    question: 'Các nguyên nhân chính gây ra sai số đo là?',
    answer: 'Do người đo, dụng cụ đo, môi trường đo',
    options: [
      'Do dụng cụ đo, người đo, phương pháp đo',
      'Do người đo, dụng cụ đo',
      'Do người đo, dụng cụ đo, môi trường đo',
      'Do phương pháp đo, người đo, môi trường đo',
    ],
  },
  {
    numb: 52,
    question:
      'Biện pháp loại trừ sai số thô (sai lầm) ra khỏi kết quả đo bằng cách?',
    answer:
      'Kiểm tra các phép đo có sai số khác biệt lớn so với các phép đo còn lại',
    options: [
      'Kiểm nghiệm và hiệu chỉnh dụng cụ đo cẩn thận',
      'Kiểm tra các phép đo có sai số khác biệt lớn so với các phép đo còn lại',
      'Tiến hành đo đạc nhiều lần và lấy kết quả trung bình',
      'Cả 3 đáp án còn lại đều đúng',
    ],
  },
  {
    numb: 53,
    question: 'Sai số hệ thống là Những sai số?',
    answer:
      'Thường có dấu và trị số không đổi, chúng lặp lại trong các lần đo, sai số này chủ yếu do dụng cụ đo không chính xác',
    options: [
      'Mắc phải trong đo đạc thường có giá trị rất lớn, sai số này gây ra do người đo thiếu cẩn thận',
      'Mà trị số và đặc điểm ảnh hưởng của nó đến kết quả đo đạc không rõ ràng, không biết trước được trị số và dấu của nó',
      'Thường có dấu và trị số thay đổi, sai số này chủ yếu do dụng cụ đo không chuẩn',
      'Thường có dấu và trị số không đổi, chúng lặp lại trong các lần đo, sai số này chủ yếu do dụng cụ đo không chính xác',
    ],
  },
  {
    numb: 54,
    question:
      'Loại sai số nào sau đây không loại trừ được khỏi kết quả đo được?',
    answer: 'Sai số ngẫu nhiên',
    options: [
      'Sai số thô',
      'Sai số hệ thống',
      'Sai số ngẫu nhiên',
      'Cả 3 đáp án còn lại đều đúng',
    ],
  },
  {
    numb: 55,
    question: 'Sai số thực của một lần đo là?',
    answer: 'Hiệu giữa trị đo và trị thực',
    options: [
      'Hiệu giữa trị thực và trị đo',
      'Hiệu giữa trị đo và trị thực',
      'Tổng của trị đo và trị thực ',
      'Hiệu giữa trị bình sai và trị thực',
    ],
  },
  {
    numb: 56,
    question:
      'Khi đo lặp một đại lượng với cùng độ chính xác nhiều lần, giá trị đúng nhất của đại lượng là?',
    answer: 'Giá trị trung bình cộng',
    options: [
      'Giá trị trung bình cộng ',
      'Giá trị của lần đo cuối cùng',
      'Giá trị của lần đo đầu tiên',
      'Trị đo nhỏ nhất',
    ],
  },
  {
    numb: 57,
    question:
      'Khi so sánh độ chính xác giữa 2 đại lượng đo dài thường sử dụng chỉ tiêu sai số nào sau đây?',
    answer: 'Sai số trung phương tương đối',
    options: [
      'Sai số trung phương tương đối',
      'Sai số giới hạn',
      'Sai số trung bình',
      'Sai số trung phương',
    ],
  },
  {
    numb: 58,
    question: 'Nguyên lý chung trong phương pháp đo cao hình học là dựa vào:',
    answer: 'Tia ngắm nằm ngang',
    options: [
      'Tia ngắm nằm nghiêng',
      'Sự thay đổi của áp suất khí quyển',
      'Tính chất bình thông nhau của chất lỏng',
      'Tia ngắm nằm ngang',
    ],
  },
  {
    numb: 59,
    question:
      'Khi đo chênh cao hình học máy thuỷ bình đặt ở giữa, thao tác nào không thực hiện:',
    answer: 'Định tâm máy',
    options: [
      'Cân bằng máy',
      'Định tâm máy',
      'Đọc số trên mia',
      'Ghi sổ, tính toán',
    ],
  },
  {
    numb: 60,
    question: 'Dụng cụ sử dụng trong đo cao hình học: ',
    answer: 'Máy thủy bình và mia thủy chuẩn',
    options: [
      'Máy thủy bình và cọc tiêu',
      'Máy thuỷ bình và thước dây',
      'Máy thủy bình và mia thủy chuẩn',
      'Máy kinh vĩ và mia thủy chuẩn',
    ],
  },
];
