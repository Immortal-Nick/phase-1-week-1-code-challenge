//Function declaration
function getNetSalary(basicSalary) {
    // NSSF calculation
    let nssf = Math.min(basicSalary * 0.06, 1080);

    // NHIF calculation
    let nhif;
    if (basicSalary <= 5999) {
        nhif = 150;
    } else if (basicSalary <= 7999) {
        nhif = 300;
    } else if (basicSalary <= 11999) {
        nhif = 400;
    } else if (basicSalary <= 14999) {
        nhif = 500;
    } else if (basicSalary <= 19999) {
        nhif = 600;
    } else if (basicSalary <= 24999) {
        nhif = 750;
    } else if (basicSalary <= 29999) {
        nhif = 850;
    } else if (basicSalary <= 34999) {
        nhif = 900;
    } else if (basicSalary <= 39999) {
        nhif = 950;
    } else if (basicSalary <= 44999) {
        nhif = 1000;
    } else if (basicSalary <= 49999) {
        nhif = 1100;
    } else if (basicSalary <= 59999) {
        nhif = 1200;
    } else if (basicSalary <= 69999) {
        nhif = 1300;
    } else if (basicSalary <= 79999) {
        nhif = 1400;
    } else if (basicSalary <= 89999) {
        nhif = 1500;
    } else if (basicSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }

    // PAYE calculation
    let taxableIncome = basicSalary - nssf;
    let paye = 0;

    if (taxableIncome <= 24000) {
        paye = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        paye = 24000 * 0.1 + (taxableIncome - 24000) * 0.25;
    } else {
        paye = 24000 * 0.1 + (32333 - 24000) * 0.25 + (taxableIncome - 32333) * 0.3;
    }

    // Net salary calculation
    let netSalary = basicSalary - (paye + nhif + nssf);
    
    return netSalary;
}
// Application
let basicSalary = 70000;
let netSalary = getNetSalary(basicSalary);
console.log(`Net Salary: ${netSalary}`);