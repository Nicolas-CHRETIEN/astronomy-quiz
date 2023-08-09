// ------------------------------------------- START PART ------------------------------------------


// Delete the difficulty's button and add new ones to select the theme.
// Once theme is choosen, delete all and create the play button.
function start () {
      
    // Update the explanation for the customer and delete the play button.
    conversation.textContent = 'Sélectionne le thème que tu souhaites étudier.\nTu peux également cliquer sur "Général" si tu souhaites des questions sur l\'ensemble des thèmes.';

    // Delete everything in all the divs.
    choice.innerHTML = '';
    result.innerHTML = '';
    jocker.innerHTML = '';
    answersBox.innerHTML = '';

    // Turn and score = 0 for the begining of the game.
    turn = 0;
    score = 0;
    jockersNumber = 3;
    jockers2Number = 3;

    // Buttons's value must be given here in the way to use it a new time for themes once the game is started again.
    buttons = [
        {
            content:'Le système solaire',
            Event: choiceTheme,
            className: 'theme__solarSystem',
            themeNameKey: 'solar system',
            themeQuestionsKey: questions.solarSystem
        },
        {
            content: 'Les étoiles',
            Event: choiceTheme,
            className: 'theme__stars',
            themeNameKey: 'stars',
            themeQuestionsKey: questions.stars
        },
        {
            content: 'Les constellations',
            Event: choiceTheme,
            className: 'theme__constellations',
            themeNameKey: 'constellations',
            themeQuestionsKey: questions.constellations
        },
        {
            content: 'Les missions spatiales',
            Event: choiceTheme,
            className: 'theme__spacialMissions',
            themeNameKey: 'spacial missions',
            themeQuestionsKey: questions.spaceMissions
        },
        {
            content: 'L\'histoire de l\'astronomie',
            Event: choiceTheme,
            className: 'theme__spaceHistory',
            themeNameKey: 'space history',
            themeQuestionsKey: questions.spaceHistory
        },
        {
            content: 'La science fiction',
            Event: choiceTheme,
            className: 'theme__scienceFiction',
            themeNameKey: 'science fiction',
            themeQuestionsKey: questions.scienceFiction
        },
        {
            content: 'Général',
            Event: choiceTheme,
            className: 'theme__general',
            themeNameKey: 'general',
            themeQuestionsKey: questions.solarSystem
        }
    ];

    // Add buttons.
    for (i = 0; i < buttons.length; i++) {
        createButtons(buttons[i].className, 'theme__buttons', themeBox, buttons[i].themeNameKey, buttons[i].themeQuestionsKey, buttons[i].content);
    }
}

// Function to create SEVERAL buttons.
// Bind give the possibility to add choiceTheme function's arguments in create button. 
// Thanks to bind I can gather all the theme's buttons event in one function.
function createButtons (className, className2, node, eventArgument1, eventArgument2, eventArgument3) {
    const button = document.createElement('button');
    button.innerText = buttons[i].content;
    button.classList.add(className);
    button.classList.add(className2);
    button.addEventListener('click', buttons[i].Event.bind(this, eventArgument1, eventArgument2, eventArgument3));
    node.appendChild(button);
}

// Function to create A SINGLE button.
function createButton (className, buttonContent, buttonEvent, node){
    const next = document.createElement('button');
    next.innerText = buttonContent;
    next.classList.add(className);
    next.addEventListener('click', buttonEvent);
    node.appendChild(next);
}


// Function to select the theme according to buttons[]'s index in the function createButtons above.
function choiceTheme (themeName, themeQuestions, frenchThemeName) {
    theme = themeName;
    console.log('thème: ' + theme);
    themeObject = themeQuestions;
    console.log('thèmeObject: ' + themeObject);
    frenchTheme = frenchThemeName;
    console.log('french theme is ' + frenchTheme);
    play();
}
