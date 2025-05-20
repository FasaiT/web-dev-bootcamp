//var generateName = require('sillyname');

// import generateName from "sillyname";

// var sillyName = generateName();

// console.log(`My name is ${sillyName}.`);


// const superheroes = require("superheroes");
// import superheroes from "superheroes";

// const name = superheroes.randomSuperhero();
// console.log(`I am ${name}!`);


//ในคลิปเรียน 197.The NPM Package Manager and Installing External Node Modules เป็นเวอร์ชั่นเก่า แต่ในnpm ที่เราติดตั้งเป็นเวอร์ชันใหม่ เลยต้องใช้การแก้ปัญหาแบบใหม่ตามด้านล่าง 
//หรืออีกวิธีนึงก็คือ การติดตั้ง superheroes เวอร์ชันเก่าตามในบทเรียน ถึงจะใช้โค้ดแบบด้านบนหรือตาในคลิปสอนได้ (แต่เหตุอันใดไม่ทราบ มันไม่ works)

import {randomSuperhero} from "superheroes";
 
const name = randomSuperhero();
 
console.log(`My hero name is ${name}!`);