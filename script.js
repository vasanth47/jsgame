'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

console.log(
  (document.querySelector('.message').textContent = 'Correct Number')
);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20);

// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = Number(document.querySelector('.highscore').textContent);
//console.log(highScore);

function checkNow() {
  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // console.log('Number not entered!!');
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber && guess - secretNumber >= 5
          ? 'Too High!!'
          : guess > secretNumber && guess - secretNumber < 5
          ? 'High!!'
          : guess < secretNumber && secretNumber - guess >= 5
          ? 'Too Low!!'
          : 'Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = '0';
      document.querySelector('.message').textContent = 'You Lost the Game!!';
    }
  }
  // else if (guess > secretNumber && guess - secretNumber > 5) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = '0';
  //     document.querySelector('.message').textContent = 'You Lost the Game!!';
  //   }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = '0';
  //     document.querySelector('.message').textContent = 'You Lost the Game!!';
  //   }
  // } else if (guess < secretNumber && secretNumber - guess > 5) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = '0';
  //     document.querySelector('.message').textContent = 'You Lost the Game!!';
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = '0';
  //     document.querySelector('.message').textContent = 'You Lost the Game!!';
  //   }
  //}
  else if (guess === secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Correct Number!!!';
      document.querySelector('.number').textContent = secretNumber;
      const number = document.querySelector('.number');
      const body = document.querySelector('body');
      body.classList.add('open');
      number.classList.add('found');
      score--;
      document.querySelector('.score').textContent = score;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else {
      document.querySelector('.score').textContent = '0';
      document.querySelector('.message').textContent = 'You Lost the Game!!';
    }
  }
  // document.querySelector('.score').textContent = `💯 Score:${score}`;
}

document.querySelector('.check').addEventListener('click', checkNow);

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  const number = document.querySelector('.number');
  const body = document.querySelector('body');
  body.classList.remove('open');
  number.classList.remove('found');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
