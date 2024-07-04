# phase-1-week-1-code-challenge

Challenge 1: Student Grade Generator

This function:

Prompts the user to input the student's marks.
Validates that the input is a number between 0 and 100.
Determines the grade based on the input marks.
Prints the grade to the console.

Challenge 2: Speed Detector


function checkSpeed() {} //This is a function declaration

//This prompts the user to enter the speed
let speed = prompt("Enter the speed of the car (km/s):");
speed = parseInt(speed); 

// This checks the values  keyed in
if (isNaN(speed) || speed < 0) {
    console.log("Invalid input. Please enter a valid speed.");
    return;
}

//This line calculates the speed limit, points demerits returns the value after being invoked.
const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log("Demerit points: " + demeritPoints);
    }
}

checkSpeed();


Challenge 3: Net Salary Calculator 

//NSSF
1. NSSF calculation takes 6% of the basic salary  and returns the minimum value between the returned value and 1080.

//NHIF
2. NHIF calculations uses classes of salaries. We therefore use the if ..else logical expressions to get the correct value.

//PAYE
1. For the correct amount we still get the correct value by taking (basic salary-NSSF) then multiplying by the correct progressive tax rate. if ..else operator is also used.

Net Salary is obtained by taking Basic salary-(NHIF+ PAYE+ NSSF)

