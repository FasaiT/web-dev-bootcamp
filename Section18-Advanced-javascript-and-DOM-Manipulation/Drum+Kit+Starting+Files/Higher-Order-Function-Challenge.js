//138. Higher Order Functions and Passing Functions as Arguments
function add(num1, num2) {
    return num1 + num2;
}

function substract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function calculator (num1, num2, operator) {
return operator(num1, num2) ;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
//141. A Deeper Understanding of Javascript Objects
//Constructor Function
//เริ่มต้นด้วยตัวพิมพ์ใหญ่ ทุกตัวเป็นตัวพิมพ์ใหญ่ ไม่ได้เขียนเป็น camelCase แบบที่เคยเจอ
//inside the constructor function we match the inputs to property names.
function HouseKeeper (yearsOfExperience, name, age, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.age = age;
    this.cleaningRepertoire = cleaningRepertoire;

// create new method using anonymous function
    this.clean = function () {
        alert('Cleaning in progress...');
    }
}

var houseKeeper1 = new HouseKeeper (12, 'Sarah', 19, ["bathroom", 'lobby', 'bedroom']);
console.log(houseKeeper1);

houseKeeper1.clean();