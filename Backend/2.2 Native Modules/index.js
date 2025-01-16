const fs = require("fs");

//การใช้ node.js ในการสร้าง text.ในไฟล์โดยใช้ writeFile
// fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

//การใช้ node.js ในการสร้าง text.ในไฟล์โดยใช้ writeFile เราต้องส่ง"utf8" ซึ่งเป็น option ภาษาเราที่เราต้องการให้มันแสดง
fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 


//ใน terminal เขียนคำส่ง cd แล้วลาก file มาวาง จะเป็นลิงก์ pathfile 
//พอเข้ามาได้แล้ว ให้พิมพ์ node index.js ใน terminal ผลลัพธ์จะแสดงเป็น The file has been saved!
//เมื่อเรา พิมพ์ node index.js ใน terminal หลังจากที่มีการสร้างคำสั่ง readFile แล้ว มัควรจะแสดงออกมาเป็น text ทั้งหมดที่มีอยู่ในไฟล์พาทที่เรากำหนด