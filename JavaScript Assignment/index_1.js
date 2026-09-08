let ageUserInput = prompt("Enter your age: ")
    if (ageUserInput >= 18){
        console.log("You are old enough to drive")}
    else{
        console.log(`${18-ageUserInput} years before you start driving`)
    }