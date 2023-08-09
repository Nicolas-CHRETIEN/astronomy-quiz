function watch () {

    // Delete all the content.
    jocker.innerHTML = '';
    answersBox.innerHTML = '';
    choice.innerHTML = '';

    // Change background image.

    // Create back to game's button.
    createButton('choice__backToGame', 'Retour aux questions', backToGame, choice);
}

function backToGame (stage) {

    // Restore previus menu.
    if (stage === 'play') {
        
    } else if (stage === 'ckeckAnswer') {
        
    }
}
