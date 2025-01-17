import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

//var qr = require('qr-image');

inquirer
  .prompt([
    /* Pass your questions in here */
    {"message": "Type in your URL: ", 
        "name": "URL"}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_imageTest.png'));

    //ถ้ายังไม่เคยมีการสร้างไฟล์ใหม่ มันจะสร้างไฟล์ใหม่ และเซฟลิงก์ในไฟล์ใหม่นั้น แต่ถ้ามีการเปลี่ยนลิงก์ input ใหม่ แต่ยังมีไฟลืเดิมอยู่ มันจะลบ text เก่าออกแล้วเซฟ text ใหม่เข้าไปแทน
    //อันด้านล่างนี้เป็นกรณีใช้ URL.txt เดิมที่มีอยุ่ มันจะเปลี่ยน txt เดิม ถ้าเรากรอกลิงก์ใหม่เข้าไป 
    // แต่เรามีการสร้างไฟล์ใหม่เข้าไปด้วยคือ URLtest.txt ขึ้นอยุ่กับว่าจะเซฟลงอันไหนยังไง ข้อความก็จะไปเปลี่ยนที่ไฟล์นั้น 
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


