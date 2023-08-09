function addJocker () {

    // Remove screen content
    conversation.innerHTML = '';
    choice.innerHTML = '';

    conversation.innerText = 'Bravo! tu as trouvé '+ turn + ' réponses d\'affilé! Pour te récompenser de tes efforts tu as gagné un jocker et un jocker2 supplémentaires. C\'est exact! La bonne réponse est: ' + currentQuestion.correctAnswer + ' ' + currentQuestion.explanation;

    // add a jocker to the jocker count.
    jockersNumber++;
    jockers2Number++;
    console.log('jocker ajouté. Nombre de jockers: ' + jockersNumber);

    createButton('choice__next', 'suivant', play, choice);
    createButton('choice__backup', 'sauvegarder et continuer plus tard', stopFunction, choice);
}

function jockerEffect () {

    console.log('nombre de réponses ' + answers.length);
    let i = 0;

    // Inform the player jocker is activated.
    addElement('Tu as utilisé un jocker.\nLa moitié des réponses ont été supprimées. Sauras tu trouver la bonne réponse parmi les réponses restantes?', 'PRE', 'conversation__paragraph-jocker');

    // Her I add deletedButtonIndex.length if a jocker2 has already been used. That way half of the total number of answers is going to be add to the first disabled one.
    let disabledButtonsNumber = 0;
    if (deletedButtonIndex.length > 0) {
        // Parse and stringify it to not let it change its value when deletedButtonIndex changes.
        disabledButtonsNumber = JSON.parse(JSON.stringify(deletedButtonIndex.length));
    }
    while (deletedButtonIndex.length < (answers.length / 2 + disabledButtonsNumber)) {
        const randomPosition = Math.floor((Math.random() * (answers.length)));
        if (randomPosition !== correctAnswerIndex && !deletedButtonIndex.includes(randomPosition)) {
            deletedButtonIndex.push(randomPosition);
            const button = document.querySelector('.' + buttons[randomPosition].classNameButton);
            button.className = 'answers__answers-cleared';
            button.disabled = true;
            i++;
        }
    }
    jockersNumber--;
    jocker.innerHTML = '';

    // create the jocker(s)2 button(s). Don't re create the jocker1 buttons because it would just give the correct answer.
    for (i = 0; i < jockers2Number; i++) {
        createButton('jocker__button', 'jocker2', jocker2Effect, jocker);
    }

    // create the jocker(s)3 button(s).
    for (i = 0; i < jockers3Number; i++) {
        createButton('jocker__button', 'jocker3', jocker3Effect, jocker);
    }
}