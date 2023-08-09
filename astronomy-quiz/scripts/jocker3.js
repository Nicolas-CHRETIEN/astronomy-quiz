function jocker3Effect () {

    
    jocker.innerHTML = '';
    jockers3Number--;

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
    for (i = 0; i < jockers3Number; i++) {
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
    } 
    
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
    answersBox.innerHTML = '';
    choice.innerHTML = '';

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