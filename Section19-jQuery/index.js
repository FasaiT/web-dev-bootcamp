// $("h1").css("color", "green");

// $("h1").text("Bye");

// $("h1").addClass("big-title margin-50");

// if ($("h1").hasClass("margin-50") == true) {
//   console.log("HAS CLASS 'margin-50'");
// }

// $("button").html("<em>Hey</em>");

// $("img").attr("src");

// $("a").attr("href", "https://www.yahoo.com");

// $("h1").click(function () {
//   $("h1").css("color", "purple");
// });

// for (var i = 0; i < 5; i++) {
// document.querySelectorAll("button")[i].addEventListener("click", function(){
//     document.querySelector("h1").style.color = "purple";
// })
// }

//using jsQuery (without using a for loop)
// $("button").click(function () {
//   $("h1").css("color", "purple");
// });

// $("input").keypress(function (event) {
// console.log(event.key);
// });

// $(document).keypress(function (event) {
//   $("h1").text(event.key);
// });

// $("h1").on("mouseover", function(){
//     $("h1").css("color", "purple");
// });

// $("button").on("click", function(){
//     $("h1").fadeToggle();
// .fadeout()
// .fadeIn();
// .slideUp();
// .slideDown();
// .slideToggle();
// .hide()
// .show()
// .toggle()
// });

// Adding and Removing Elements with jQuery
// .prepend() ต่างกับ .before() ตรงที่มันจะแอดเพิ่มข้างในตัวที่เราเลือกไปเลย ไม่ใช่ก่อนหน้าตัวที่เราเลือก
// .append() ต่างกับ .after() ตรงที่มันจะแอดเพิ่มข้างในตัวที่เราเลือกไปเลย ไม่ใช่หลังตัวที่เราเลือก

// $("button").on("click", function(){
//     $("h1").animate({opacity: 0.5}); //ใส่ได้แค่ css ที่มีค่าเป็น ตัวเลขเท่านั้น
//     $("h1").animate({margin: '20%'});
// });

////Chaining methods together
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});