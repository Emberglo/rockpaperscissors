let playerScore = 0;
let compScore = 0;
let compChoice = computerChoice();

loadScores();

function saveScores() {
	window.localStorage.setItem('player', JSON.stringify(playerScore));
	window.localStorage.setItem('computer', JSON.stringify(compScore));
}

function loadScores() {
	let storedPlayerScore = JSON.parse(window.localStorage.getItem('player'));
	if (storedPlayerScore) {
		playerScore = storedPlayerScore;
	}
	console.log(playerScore);
	let storedCompScore = JSON.parse(window.localStorage.getItem('computer'));
	if (storedCompScore) {
		compScore = storedCompScore;
	}
	console.log(compScore);
}

function computerChoice() {
	//find a random value between (and including 1 and 5)
	let randomNumber = Math.floor(Math.random() * 5) + 1;
	console.log('comp:', randomNumber);
	//logic to assign each option to a number
	switch (randomNumber) {
		case 1:
			document.getElementById('compChoiceImg').innerHTML = `<i class="far fa-hand-rock text-3xl"></i>`;
			return 'rock';
			break;
		case 2:
			document.getElementById('compChoiceImg').innerHTML = `<i class="far fa-hand-paper text-3xl"></i>`;
			return 'paper';
			break;
		case 3:
			document.getElementById('compChoiceImg').innerHTML = `<i class="far fa-hand-scissors text-3xl"></i>`;
			return 'scissors';
			break;
		case 4:
			document.getElementById('compChoiceImg').innerHTML = `<i class="far fa-hand-lizard text-3xl"></i>`;
			return 'lizard';
			break;
		case 5:
			document.getElementById('compChoiceImg').innerHTML = `<i class="far fa-hand-spock text-3xl"></i>`;
			return 'spock';
			break;
	}
}

function playerWins() {
	document.getElementById('winnerCard').classList.remove('hidden');
	document.getElementById('playerControls').classList.add('hidden');
	document.getElementById('winner').innerText = 'You Win!';
	playerScore += 1;
	saveScores();
	document.getElementById('playerScore').innerText = `Player Score: ${playerScore}`;
	document.getElementById('compScore').innerText = `Computer Score: ${compScore}`;
}

function computerWins() {
	document.getElementById('winnerCard').classList.remove('hidden');
	document.getElementById('playerControls').classList.add('hidden');
	document.getElementById('winner').innerText = 'Computer Wins!';
	compScore += 1;
	saveScores();
	document.getElementById('playerScore').innerText = `Player Score: ${playerScore}`;
	document.getElementById('compScore').innerText = `Computer Score: ${compScore}`;
}

function tie() {
	document.getElementById('winnerCard').classList.remove('hidden');
	document.getElementById('playerControls').classList.add('hidden');
	document.getElementById('winner').innerText = 'Tie! Try Again.';
	document.getElementById('playerScore').innerText = `Player Score: ${playerScore}`;
	document.getElementById('compScore').innerText = `Computer Score: ${compScore}`;
}

function playAgain() {
	window.location.reload();
}

function play(playerChoice) {
	//winner logic
	//Tie Logic
	if (playerChoice == compChoice) {
		tie();
	}
	//Rock Logic
	if (compChoice == 'rock') {
		if (playerChoice == 'paper') {
			playerWins();
		}
		if (playerChoice == 'spock') {
			playerWins();
		}
		if (playerChoice == 'scissors') {
			computerWins();
		}
		if (playerChoice == 'lizard') {
			computerWins();
		}
	}
	//Paper Logic
	if (compChoice == 'paper') {
		if (playerChoice == 'scissors') {
			playerWins();
		}
		if (playerChoice == 'lizard') {
			playerWins();
		}
		if (playerChoice == 'rock') {
			computerWins();
		}
		if (playerChoice == 'spock') {
			computerWins();
		}
	}
	//Scissors Logic
	if (compChoice == 'scissors') {
		if (playerChoice == 'rock') {
			playerWins();
		}
		if (playerChoice == 'spock') {
			playerWins();
		}
		if (playerChoice == 'paper') {
			computerWins();
		}
		if (playerChoice == 'lizard') {
			computerWins();
		}
	}
	//Lizard Logic
	if (compChoice == 'lizard') {
		if (playerChoice == 'scissors') {
			playerWins();
		}
		if (playerChoice == 'rock') {
			playerWins();
		}
		if (playerChoice == 'spock') {
			computerWins();
		}
		if (playerChoice == 'paper') {
			computerWins();
		}
	}
	//Spock Logic
	if (compChoice == 'spock') {
		if (playerChoice == 'paper') {
			playerWins();
		}
		if (playerChoice == 'lizard') {
			playerWins();
		}
		if (playerChoice == 'scissors') {
			computerWins();
		}
		if (playerChoice == 'rock') {
			computerWins();
		}
	}
}

function rulesButton() {
	let ref = document.getElementById('rules');
	if (ref.classList.contains('hidden')) {
		ref.classList.remove('hidden');
	} else {
		ref.classList.add('hidden');
	}
}
