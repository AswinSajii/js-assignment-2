var readlineSync = require('readline-sync');
let number= parseInt(readlineSync.question('Enter a number'));
for(let i=1;i<=10;i++){
    console.log(number,"*",i,"=",number*i);
}