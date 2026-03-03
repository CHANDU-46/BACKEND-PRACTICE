const fs= require('fs');

fs.writeFileSync('hello.txt',"HELLO WORLD FILE MODULE");

const data=fs.readFileSync('hello.txt');

console.log("THE FILE CONTENT :  "+data);