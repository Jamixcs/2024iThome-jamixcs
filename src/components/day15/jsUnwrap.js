const obj = { a: 1, b: 2 };

// 未解包的範例，提取屬性值
console.log(obj.a, obj.b); // 輸出: 1 2

// 解包的範例，提取屬性值
const { a, b } = obj; // 解構賦值
// 提取屬性
console.log(a, b); // 輸出: 1 2
