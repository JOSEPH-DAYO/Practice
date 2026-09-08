let num = prompt("Enter your Score")
switch(true){
case num >= 70:
    console.log("A");
    break;

case num >= 60:
    console.log("B");
    break;

case num >= 50:
    console.log("C");
    break;

case num >= 40:
    console.log("D")
    break;

case num >= 30:
    console.log("E")
    break;

case num >=0:
    console.log("F")
    break;

default:
    console.log("No Score");
    break;
}