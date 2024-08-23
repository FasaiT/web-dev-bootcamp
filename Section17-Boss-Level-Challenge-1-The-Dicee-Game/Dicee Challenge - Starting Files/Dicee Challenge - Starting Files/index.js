var randomNumber1 = Math.floor(Math.random() * 6) + 1 ; //กำหนดค่าสุ่มตัวเลขตามที่มีบนลูกเต๋า 1-6
var randomDiceImage = "dice" + randomNumber1 +".png" //กำหนดชื่อภาพที่จะใช้ โดยมาจาเลขสุ่มที่กำหนดจาก randomNumber1
var randomImageSource = "images/" + randomDiceImage; //กำหนด "แหล่งที่มาของรูปภาพ" จากไฟล์ + ชื่อภาพจาก randomDiceImage
var image1 = document.querySelectorAll("img")[0]; //เปลี่ยนรูปภาพลูกเต๋า กำหนดเป็นตำแหน่งซ้าย
image1.setAttribute("src", randomImageSource); //setAttribute src ในไฟล์ html 

var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//ถ้าฝั่งไหนมากกว่า ให้แสดง h1 ว่าฝั่งนั้นชนะ
if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "Player 1 win";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 win";
}
//ในกรณีที่เสมอให้กำหนด h1 ว่าเสมอ
else {
    document.querySelector("h1").innerHTML = "Draw!";
  }