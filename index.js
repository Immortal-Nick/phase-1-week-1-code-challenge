//This code prompts the user to enter marks
function getStudentGrade() {
    let marks = prompt("Enter student marks (0 to 100):");
    marks = parseInt(marks);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
    } else {
        let grade;
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 50) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }
        console.log("The grade is: " + grade);
    }
}

getStudentGrade();