var events = require('events');
const fs =require('fs');
var eventHandler = new events.EventEmitter();

let mytxt ="./text.txt"


const task1 = () => {
let myTxt = fs.promises.readFile(mytxt)
.then (value =>(value.toString()))
return myTxt}
//Task 1
let InputTxt =task1();
// console.log (InputTxt);



//try using sync make a readfile as a value
// const datatext =() => {
//   let data = fs.readFileSync(mytxt);
//   return data.toString();
// }
// const datk = datatext();
  

//add event to make sure what im doin with the program
function onprocess(){
  console.log(`Data Processing..`);
}
function onDone (){
  console.log(`Suceed Deliver Text`);
}
eventHandler.on(`process`, onprocess);
eventHandler.on (`done`, onDone);

const panggil = async (value) => {
 return new Promise((resolve,reject) =>{
     setTimeout (()=>{ 
         if (value) {
            resolve(value);
         }
         else {
            reject (`input your param`);
         }
        },3000)
     })
    }

  
const after = () => {
eventHandler.emit(`process`);
panggil(InputTxt)
    .then (value => {
        console.log (value);
        console.log (`Deliver AFTER..`)
        eventHandler.emit(`done`);
    })
    .catch (error => console.log (error))
    .finally (()=>  console.log (`TASK 1 B DONE! : Succeed Deliver Text AFter `));
}

const before = () => {
    panggil (InputTxt)
    .then (value => {
        console.log (value)
        eventHandler.emit(`done`);
        
    })
    .catch (error => console.log (error))
    .finally (()=>  console.log (`TASK 1 A DONE! : Suceed Deliver Text Before`));
    console.log (`Deliver BEFORE..`);
    eventHandler.emit(`process`);
    }
    
     // task1();
       before();
       //after();