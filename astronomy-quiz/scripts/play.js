// --------------------------------------- PLAY PART --------------------------------------------

// Play function, select the questions, erase the old children, add the choices and check if the answer is correct.
function play () {
    turn++;

    // Re initialize deletedButtonIndex. This way the conditions in jocker 2 can work.
    const nothing = [];
    deletedButtonIndex = nothing;
    console.log('---------- Turn '+ turn + '  ----------');
    console.log('selected theme: ' + theme);
    console.log('Number of availables jockers: ' + jockersNumber);

        // create the background.
        document.body.style.backgroundImage = 'images/background.png';
        // const backgroundImage = document.createElement("img");
        // backgroundImage.src = 'images/background.png';
        // bodyclass.style.backgroundImage = backgroundImage;

    // create the jocker(s) button(s).
    for (i = 0; i < jockersNumber; i++) {
        createButton('jocker__button', 'jocker', jockerEffect, jocker);
        console.log('button: ' + (i + 1) + ' created');
    }

    // create the jocker(s)2 button(s).
    for (i = 0; i < jockers2Number; i++) {
        createButton('jocker__button', 'jocker2', jocker2Effect, jocker);
        console.log('button: ' + (i + 1) + ' created');
    }

    // create the jocker(s)3 button(s).
    for (i = 0; i < jockers2Number; i++) {
        createButton('jocker__button', 'jocker3', jocker3Effect, jocker);
        console.log('button: ' + (i + 1) + ' created');
    }

    // Rise the level if needed by changing the difficulty of the question.
    // Change selectedquestion area only if we need to change level. Keep the old value with spliced question if we do not.
    if (turn === 21 || backup) {

        // Change the value to not restart at the backup point next turn.
        localStorage.removeItem('backup');

        // Increase level and change the questions to ask for hardest questions
        level = 'hard';
        console.log('level: ' + level);
        goodAnswerValue = 3;
        
        // Select th hardest questions for the rest of the game.
        if (theme === 'general') {
            selectedQuestions = questions.solarSystem.hard.concat(questions.stars.hard, questions.constellations.hard, questions.spaceMissions.hard, questions.spaceHistory.hard, questions.scienceFiction.hard);
        } else {
            selectedQuestions = themeObject.hard;
        }

    } else if (turn === 11) {

        // Increase level and change the questions to ask for harder questions.
        level = 'medium';
        console.log('level: ' + level);
        goodAnswerValue = 2;

        // Increase the difficulty of the questions selected.
        if (theme === 'general') {
            selectedQuestions = questions.solarSystem.medium.concat(questions.stars.medium, questions.constellations.medium, questions.spaceMissions.medium, questions.spaceHistory.medium, questions.scienceFiction.medium);
        } else {
            selectedQuestions = themeObject.medium;
        }

    } else  if (turn === 1) {

        // Select the easiest level and select the easiest questions.
        level = 'easy';
        console.log('level: ' + level);
        goodAnswerValue = 1;

        // Select the easiest questions.    
        if (theme === 'general') {
            const nothing = '';
            selectedQuestions = nothing
            selectedQuestions = questions.solarSystem.easy.concat(questions.stars.easy, questions.constellations.easy, questions.spaceMissions.easy, questions.spaceHistory.easy, questions.scienceFiction.easy);
        } else {
            selectedQuestions = themeObject.easy;

            // Add a variable instead of "selectedQuestions" to let this last one unchanged if the player start again.
            // Json.parse and stringify are used to make a deep copy of selectedQuestions.
            // availablesQuestions = selectedQuestions;
        }

    } else {

        // Do not change the level or the selected questions.
        console.log('selectedQuestion[] inchangé. Level is still: ' + level);
    } 
    
    console.log('selectedQuestions: ' + selectedQuestions);
    console.log('availablesQuestions: ' + selectedQuestions);


    // Select a random question in the selected questions.
    const randomNumber = Math.floor(Math.random() * (selectedQuestions.length - 1));
    currentQuestion = selectedQuestions[randomNumber];

    // Show the question asked to the customer.
    console.log('question asked: ' + currentQuestion.question);
    console.log('correct answer :' + currentQuestion.correctAnswer);
    console.log('number of questions still availables before selection ' + selectedQuestions.length);

    //  Withdraw the question asked of the selected questions's array to be sure to not ask it again in the game.
    selectedQuestions.splice(randomNumber, 1);

    console.log('number of questions still availables after selection ' + selectedQuestions.length);

    // Ask the question.
    conversation.textContent = currentQuestion.question;

    // Delete the child elements of the choice node.
    choice.innerHTML = '';
    themeBox.innerHTML = '';

    // Generate more and more possible answers if the player go far but with 10 at the maximum. (9 wrong answers and one correct).
    // Answers[] must be cleard here.
    answers = [];

    if (turn < 21) {
        createAnswers(3);
    } else if (turn > 80) {
        createAnswers(9); 
    } else {
        createAnswers(turn / 10);
    }
}

// Generate the array with the four answers to the question.
// This fonction is used in play () function.
function createAnswers (wrongAnswersNumber) {

    // Add new wrong answers to the array "answers" if they are not equal to the correct answer and if they have not already been used.
    // The condition must be used in this order to avoid undefined answers in the array.
    console.log('number of possible answers before selection ' + currentQuestion.categoryAnswer.length);

    while (answers.length < wrongAnswersNumber) {

        // Select a random wrong answer at each turn.
        const randomNumber = Math.round(Math.random() * (currentQuestion.categoryAnswer.length - 1));
        randomAnswer = currentQuestion.categoryAnswer[randomNumber];

        if (randomAnswer === currentQuestion.correctAnswer || answers.includes(randomAnswer) === true) {

            // Delete it if it's already been used. 
            currentQuestion.categoryAnswer.splice(randomNumber, 1);

        } else {

            // Add it to the answers's array if it's not.
            answers.push(randomAnswer);
        }
        console.log('number of possible answers after selection ' + currentQuestion.categoryAnswer.length);
    }
    
    // Here I add 1 to the array's length first and then I soustract 1 to the result to have the possibility to obtain the first or the last position with 0 and the max number.
    correctAnswerIndex = Math.floor((Math.random() * (answers.length)));

    // Add the correct answer at the random position.
    answers.splice(correctAnswerIndex, 0, currentQuestion.correctAnswer);

    // Reset the buttons array to create buttons values for the createButtons function in the loop.
    buttons = [];

    // Show the answers and create the buttons for each answer.
    // That way I don't have to create a new function. The values content's buttons is taken in answers's array.
    for (i = 0; i < answers.length; i++) {
        buttons.push({content: answers[i], Event: checkAnswers, classNameButton: 'answers__answer' + (i + 1)});
        createButtons(buttons[i].classNameButton, 'answers__buttons', answersBox, i);
        console.log('réponse ' + (i + 1) + ': ' + answers[i]);
    }
}

// Add the event to the buttons with answers.
// This function is used in choiceAnswer () function.
function checkAnswers (answersIndex){
    console.log('checkAnswer has been called');

    // Delete jocker buttons and the script.
    jocker.innerHTML = '';
    answersBox.innerHTML = '';
    
    

    // Show the answer selected.
    console.log('selected answer : ' + answers[answersIndex]);

    // Check if the answer is correct.
    if (answers[answersIndex] === currentQuestion.correctAnswer) {

        // Increase the score with the value corresponding to the level.
        score = score + goodAnswerValue;

        // Erase the old html elements.
        conversation.textContent = '';

        addElement('Exact! La bonne réponse est: ' + currentQuestion.correctAnswer + '\n' + currentQuestion.explanation, 'PRE', 'conversation');

        // Add the script elements.
        choice.innerHTML = '';
        choice.textContent = scriptElements[turn].text;
        const currentImage = document.createElement("img");
        currentImage.src = scriptElements[turn].source;
        choice.appendChild(currentImage);

        // Check if there are still at least 1 question left.
        if (selectedQuestions.length > 0) {

            // Create a save button to take a break if the turn is > 20 and add the jocker annoncement if it's time.
            if (turn === 50 || turn === 100 || turn === 200 || turn === 300 || turn === 400 || turn === 500 || turn === 1000) {
                addJocker();
            } else if (turn > 20) {
                createButton('choice__next', 'suivant', play, choice);
                createButton('choice__backup', 'sauvegarder et continuer plus tard', stopFunction, choice);
            } else {
                createButton('choice__next', 'suivant', play, choice);
            }

        } else {

            // Add a button to access to end the game. A condition is going to check if it's because of a succes or a mistake.
            createButton('choice__next', 'suivant', end, choice);
        }

    } else {

    // Erase the old html elements.
    conversation.innerHTML = '';
    addElement('Faux...  La bonne réponse est: ' + currentQuestion.correctAnswer + '\n' + currentQuestion.explanation, 'PRE', 'conversation');
    
    // Delete the child elements of the choice node.
    choice.innerHTML = '';
    
    // Add a button to access to the next part of the game.
    createButton('choice__next', 'suivant', end, choice);
    }
}

// Function to save the game and let the player have a break.
function stopFunction () {

    // Create an object to store the current game's datas.
    backup = {
        savedTurn: turn,
        savedScore: score,
        savedGoodAnswerValue: goodAnswerValue,
        savedThemeObject: themeObject,
        savedTheme: frenchTheme,
        savedJockersNumber: jockersNumber
    }

    // Store the object.
    localStorage.setItem('backup', JSON.stringify(backup));

    // Add a button to continue if the player want to continue immediatly.
    choice.innerHTML = '';
    home();

    // Say goodbye.
    conversation.innerText = 'Merci d\'avoir joué et à bientôt pour poursuivre la partie!';
}