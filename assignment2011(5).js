let input = prompt("Enter seconds for countdown:");
let timeLeft = Number(input);
if (isNaN(timeLeft) || timeLeft <= 0) {
  console.log("Please enter a valid positive number.");
} else {
  const timer = setInterval(() => {
    console.log("Time left:", timeLeft);
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
    }
  }, 1000);
  setTimeout(() => {
    let key = prompt('Press "s" to stop the countdown early:');

    if (key && key.toLowerCase() === "s") {
      clearInterval(timer);
      console.log("Countdown stopped by user.");
    }
  }, 2000); 
}
