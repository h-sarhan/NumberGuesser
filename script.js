// Declaring DOM Objects
const guess = document.querySelector(".guess-here");
const button = document.querySelector(".button");
const message = document.querySelector(".message");

// Initialising variables
let correctNumber = 0;
let guessNumber = 3;
let again = 0;

// Play a round
button.addEventListener("click", e => {
	// Check if player is playing again
	if (again == 1) {
		guess.setAttribute("Placeholder", "Enter your guess...");
		guess.className = "form-control guess-here";
		guess.disabled = false;
		button.textContent = "Submit";
		message.textContent = "";
		correctNumber = 0;
		guessNumber = 3;
		message.textContent = "";
		guess.value = "";
		again = 0;
	} else {
		if (correctNumber == 0) {
			// Creating the correct number
			correctNumber = Math.floor(Math.random() * 10 + 1);

			console.log(correctNumber);
		}
		let g = guess.value;
		// Win condition
		if (g == correctNumber) {
			youwin();
		}
		//Checks if the users input is out of range
		if ((g < 1 || g > 10) && g != "") {
			alert("You cant do that :(");
		}
		// Wrong guess
		if (g != correctNumber && g > 0 && g < 11) {
			guess.value = "";
			guess.className = "form-control guess-here is-invalid";
			guessNumber--;

			message.className = "text-danger";
			message.textContent = `${g} is not correct, ${guessNumber} guesses left`;
			if (guessNumber == 0) {
				youLose();
			}
		}

		e.preventDefault();
	}
});

// Winning message
function youwin() {
	guess.value = "";
	guess.className = "form-control guess-here is-valid";
	message.className = "text-success";
	message.textContent = ` ${correctNumber} is correct, YOU WIN!`;
	playAgain();
}

// Wrong guess message
function wrongGuess() {}

// Losing message
function youLose() {
	guess.value = "";
	guess.className = "form-control guess-here is-invalid";
	message.textContent = `Game Over, you lost. The correct number was ${correctNumber}`;
	playAgain();
}

// Play again button
function playAgain() {
	button.textContent = "Play again";
	guess.disabled = true;
	guess.setAttribute("Placeholder", "");
	again = 1;
}
