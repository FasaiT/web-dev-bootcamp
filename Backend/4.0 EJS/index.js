//1. ติดตั้ง npm express, ejs และนำเข้า
//1.1 นำเข้า และกำหนดพอร์ทที่เราต้องการ
import express from "express";

//เรียกใช้
const app = express(); //ตัวแปร app เพื่อเข้าใช้งาน express
const port = 3000; //พอร์ตของ Server ที่ใช้ในการเปิด Localhost 

// 3.1 เมธอด get ใช้ขอข้อมูลจากเซิร์ฟเวอร์
app.get("/", (req, res) => {
  //3.2 กำหนดวันขึ้นมา โดยมีเงื่อนไขคือ 
  //ถ้าเป็นวันธรรมดา ให้แสดงว่าเป็น a weekday และข้อความ It's time to work hard 
  // แต่ถ้าเป็นวันเสาร์หรืออาทิตย์ให้แสดง the weekend และข้อความ It's time to relax
  
  // 3.3.1 ใช้เมธอด getDay() ของ js เพื่อรับค่าวันออกมาก่อน
  const today = new Date();

  //define 
  // const today = new Date("March 4, 2025 01:15:00");

  //test weekend below
  // const today = new Date("March 2, 2025 01:15:00");
  const day = today.getDay();

  //console.log(day); ได้ผลออกมาเป็นตัวเลข โดย ถ้า 0 คือวันอาทิตย์ ถ้า 6 คือวันเสาร์
  
  // 3.3.2 กำหนดตัวแปรตั้งต้น
  let type = "a weekday";
  let msg = "It's time to work hard";

  //3.3.3 สร้างเงื่อนไข ถ้าตัวแปร day ที่ได้จากเมธอด getDay() คือ 0 หรือ 6 แล้วกำหนดค่าใหม่ให้ตัวแปร type และ msg
  if (day === 0 || day === 6) {
    type = "the weekend";
    msg = "It's time to relax";
  }

  //4. ใช้ .render ในการอ่านไฟล์แทนการใช้ .sendfile
  res.render("index.ejs", {
    //มี 2 คีย์คือ 
    // - dayType และมี value คือ type (เอามาจากตัวแปรข้างบน) เพื่อแสดงวัน
    // - message และมี value คือ msg (เอามาจากตัวแปรข้างบน) เพื่อแสดงข้อความที่กำหนด
    dayType: type,
    message: msg,
  });
});

//2..listen กำหนดการรันบนพอร์ทที่ต้องการ 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
