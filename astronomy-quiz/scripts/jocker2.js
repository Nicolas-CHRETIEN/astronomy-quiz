// This function is called when the player use a jocker2. It changes the button and their event for the second function event.
function jocker2Effect () {
    jockers2Number--;

    // Inform the player jocker is activated.
    addElement('Tu as utilisé un jocker 2.\nLa prochaine question que tu sélectionneras n\'aura aucune conséquence si elle se révèle être fausse.', 'PRE', 'conversation__paragraph-jocker');

    console.log('cleared answers? ' + document.querySelector('answers__answer-cleared'));

    jocker.innerHTML = '';
    answersBox.innerHTML = '';
    choice.innerHTML = '';

    // Keep the randoms wrong answers disabled if a jocker1 has already been used.
    for (i = 0; i < answers.length; i++) {

        if (deletedButtonIndex.includes(i)) {
            const button = document.createElement('button');
            button.innerText = buttons[i].content;
            button.classList.add('answers__answers-cleared');
            answersBox.appendChild(button);

        } else {
            const button = document.createElement('button');
            button.innerText = buttons[i].content;
            button.classList.add('answers__answer-jocker2');
            button.classList.add('answers__buttons');
            button.classList.add(buttons[i].classNameButton);
            button.addEventListener('click', jocker2.bind(this, i));
            answersBox.appendChild(button);
        }
    }
}

// This second function is the event assign to the buttons once the jocker2 is used.
function jocker2 (firstIndex) {
    conversation.innerHTML = '';
    
    // Inform the player jocker is activated.
    addElement('Non, ce n\'était pas la bonne réponse.\n\n\n' + currentQuestion.question, 'PRE', 'conversation__paragraph-jocker');

    

    // Check if the answer is correct.
    if (firstIndex === correctAnswerIndex) {

        // Remove jockers.
        jocker.innerHTML = '';
        answersBox.innerHTML = '';

        console.log('answer was correct');
        // Increase the score with the value corresponding to the level.
        score = score + goodAnswerValue;

        // Erase the old html elements.
        conversation.textContent = 'Exact! La bonne réponse est: ' + currentQuestion.correctAnswer + ' ' + currentQuestion.explanation;


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
        }

    } else {
        
        jocker.innerHTML = '';
        answersBox.innerHTML = '';
        choice.innerHTML = '';

        for (i = 0; i < answers.length; i++) {
            if (deletedButtonIndex.includes(i)) {
                console.log('button ' + (i + 1) + 'was already cleared');
                const button = document.createElement('button');
                button.innerText = buttons[i].content;
                button.classList.add('answers__answers-cleared');
                answersBox.appendChild(button);
            } else {
                
                console.log('button ' + (i + 1) + 'was not already cleared');
                createButtons(buttons[i].classNameButton, 'answers__buttons', answersBox, i);
            }
        }

        // Disable the wrong selected answer.
        const wrongAnswer = document.querySelector('.' + buttons[firstIndex].classNameButton);
        wrongAnswer.className = 'answers__answers-cleared';
        wrongAnswer.disabled = true;

        // Add the index of the disabled button to the array if the player want to use an other jocker.
        deletedButtonIndex.push(firstIndex);

        // create the jocker(s) button(s).
        for (i = 0; i < jockersNumber; i++) {
            createButton('jocker__button', 'jocker', jockerEffect, jocker);
        }

        // create the jocker(s)2 button(s).
        for (i = 0; i < jockers2Number; i++) {
            createButton('jocker__button', 'jocker2', jocker2Effect, jocker);
        }

        // create the jocker(s)3 button(s).
        for (i = 0; i < jockers3Number; i++) {
            createButton('jocker__button', 'jocker3', jocker3Effect, jocker);
        }
    }
}

