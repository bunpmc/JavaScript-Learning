// Map và WeakMap là hai loại dữ liệu trong JavaScript có điểm chung là đều lưu trữ cặp khóa-giá trị nhưng có những khác biệt quan trọng về cách hoạt động và sử dụng. Hãy cùng tìm hiểu chi tiết về từng loại:

// Map
// Mục đích: Map là một đối tượng cho phép lưu trữ các cặp khóa-giá trị, trong đó cả khóa và giá trị đều có thể là bất kỳ kiểu dữ liệu nào.
// Đặc điểm chính:
// Iterable: Có thể lặp qua các mục, khóa hoặc giá trị của một Map.
// Kích thước: Có thuộc tính size trả về số lượng cặp khóa-giá trị.
// So sánh khóa: Các khóa trong Map được so sánh bằng tham chiếu (nghiêm ngặt so với ===).
// Tính khả biến: Bạn có thể thay đổi một Map sau khi đã tạo, bao gồm việc thêm, cập nhật hoặc xóa các mục.
// Sử dụng: Rất hữu ích khi bạn muốn liên kết nhiều giá trị với một khóa duy nhất, hoặc khi bạn cần tìm kiếm nhanh chóng theo khóa.
// Ví dụ:

let myMap = new Map();
myMap.set("a", 1);
myMap.set("b", 2);

console.log(myMap.get("a")); // 1
console.log(myMap.size); // 2
myMap.delete("b");
console.log(myMap.size); // 1

// WeakMap
// Mục đích: WeakMap cũng lưu trữ cặp khóa-giá trị, nhưng nó có một số hạn chế nhất định.
// Đặc điểm chính:
// Khóa yếu: Khóa trong WeakMap là yếu, nghĩa là chúng không ngăn đối tượng khỏi bị thu gom rác (garbage collection). Điều này có nghĩa là nếu không có bất kỳ tham chiếu nào khác đến khóa, nó sẽ tự động bị xóa.
// Không thể lặp: Bạn không thể lặp qua các mục của WeakMap. Không có thuộc tính size để lấy số lượng mục.
// Chỉ khóa đối tượng: Khóa trong WeakMap chỉ có thể là các đối tượng và không thể là kiểu nguyên thủy (như string, number, boolean).
// Sử dụng: Thích hợp để lưu trữ các đối tượng mà bạn muốn tránh khỏi việc giữ tham chiếu không cần thiết, giúp tối ưu hóa bộ nhớ.
// Ví dụ:

let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "some value");

// obj không còn tham chiếu từ bên ngoài, nó có thể bị thu gom rác và xóa khỏi WeakMap

// So sánh:
// Sự khác biệt chính:
// Khóa: Map có thể chứa bất kỳ kiểu dữ liệu nào làm khóa, trong khi WeakMap chỉ chứa đối tượng làm khóa.
// Thu gom rác: WeakMap tự động thu gom rác các khóa mà không cần tham chiếu ngoài, còn Map thì không.
// Khả năng lặp: Map có thể lặp qua các mục, còn WeakMap thì không.
// Thuộc tính size: Map có thuộc tính size để biết số lượng mục, WeakMap thì không.

//Comma
// Ví dụ về phép toán dấu phẩy
let a, b;
a = ((b = 10), b + 5); // Đánh giá từ trái sang phải: đầu tiên, `b = 10` và bỏ qua giá trị, sau đó trả về `b + 5` (15) là giá trị của toàn bộ biểu thức

console.log(a); // 15

// Ví dụ sử dụng phép toán dấu phẩy trong vòng lặp
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(i, j);
}
// In ra: (0, 10), (1, 9), (2, 8), ..., (9, 1)
