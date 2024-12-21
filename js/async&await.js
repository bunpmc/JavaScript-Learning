// async:

// Được sử dụng để khai báo một hàm bất đồng bộ (asynchronous function).
// Khi một hàm được khai báo với từ khóa async, nó sẽ tự động trả về một Promise.

async function example() {
  return "Hello, world!";
}

// await:

// Chỉ sử dụng được trong các hàm được khai báo với async.
// await được dùng để chờ một Promise hoàn tất. Nó tạm dừng thực thi hàm cho đến khi Promise hoàn tất (resolve hoặc reject).

async function example() {
  let result = await Promise.resolve("Hello, world!");
  console.log(result);
}

//-------------------------//

async function greet() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000); // Sau 1 giây, Promise resolve
  });

  let result = await promise; // Dừng cho đến khi promise hoàn tất
  console.log(result); //Output: "Hello, world!"
}

// Ket qua cua ham la mot Promise
greet();
