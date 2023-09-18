import { questions } from "./questions.js";

// ********************
// * define functions *
// ********************

// format the question for display and return the text
function createTextToDisplayQuestion(questionObject) {
  // string interpolation / string templates
  // define a string between ``
  // include any variables in that string by putting ${variable name}

  // uses arrow notation to define function for map
  // essentally takes letter and choice out of the input object
  // and gives back a new array entry

  // don't worry if you don't follow this bit of code - it is just
  // formatting some text
  const choices = Object.entries(questionObject.choices)
    .map(([letter, choice]) => `${letter}) ${choice}`)
    .join("\n");

  const textToDisplay = `#${questionObject.number} ${questionObject.question}\n\n${choices}\n\nPlease enter either A, B, C or D.\n`;
  console.log(textToDisplay);
  return textToDisplay;
}

function getSelectedChoiceFromUser(questionText) {
  while (true) {
    const rawChoice = prompt(questionText);
    const standardised = rawChoice?.toUpperCase();
    if (
      "A" === standardised ||
      "B" === standardised ||
      "C" === standardised ||
      "D" === standardised
    ) {
      return standardised;
    } else if (undefined === standardised) {
      return null;
    }
    alert("Invalid selection, please enter either A, B, C or D.");
  }
}

function playGame() {
  // ask user if they want to continuequit
  const userHasCancelled = !confirm(
    "The quiz is about to begin. Are you sure you want to play?"
  );
  // check user response
  if (userHasCancelled) {
    return alert("You've cancelled the quiz, no more questions will be shown.");
  }

  let score = 0;

  // for each question from the questions array (defined in questions.js)
  for (let i = 0; i < questions.length; i++) {
    // get the question object from the questions array
    const question = questions[i];
    console.log(question);

    // we're plugging the question object in the function to format it correctly
    const text = createTextToDisplayQuestion(question);
    const userChoice = getSelectedChoiceFromUser(text);

    const userHasCancelled = null === userChoice;
    if (userHasCancelled) {
      return alert(
        "You've cancelled the quiz, no more questions will be shown."
      );
    }

    const userHasAnsweredIncorrectly = userChoice !== question.correctChoice;
    if (userHasAnsweredIncorrectly) {
      return alert(
        `Incorrect, you lose! The correct answer was ${question.correctChoice}. Your score was ${score}.`
      );
    }

    score++;
    alert(`Correct! Your score is now ${score}!`);
  }

  alert(
    `You've reached the end of the quiz, your score was ${score}. Please play again!`
  );
}

// ***********************
// * program starts here *
// ***********************

playGame();
