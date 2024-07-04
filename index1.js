//Function declaration.
function checkSpeed() {
    let speed = prompt("Enter the speed of the car (km/s):");
    speed = parseInt(speed);

    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Please enter a valid speed.");
        return;
    }

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

