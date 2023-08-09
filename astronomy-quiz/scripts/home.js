// Show the game's rules.
function gameRules () {
    choice.innerHTML = '';
    conversation.innerHTML = '';
    result.innerHTML = '';
        
    // Create title.
    const rulesTitle = document.createElement('h2');
    rulesTitle.classList.add('conversation__rules-title');
    conversation.appendChild(rulesTitle);
    rulesTitle.innerText = 'Règles du jeu:';

    Paragraphs = [
        'Tu es un célèbre astronome missioné par une très grande agence spatiale.\nTu dois utiliser tes incroyables connaissances pour mener à bien la mission que l\'on t\'a confié: envoyer un satellite explorer le système solaire et le conduire aussi loin que possible\nSi possible plus loin que tout ce que nous avons pu explorer jusqu\'à présent.',
        'Les bonnes réponses que tu parviendras à donner permettront d\'alimenter les moteurs du vaisseau en énergie.\nAttention! Si tu te trompes, le vaisseau sera hors de controle et la mission sera un echec.',
        'Les questions sont regroupées entre différents thèmes. \nTu peux sélectionner le thème sur lequel tu souhaites jouer au début du jeu parmi les thèmes suivants : \n\nLe système solaire \nLes étoiles \nLes constellations \nLes missions spatiales \nL\'histoire de l\'astronomie \nLa science-fiction \nGénéral (qui regroupe l\'ensemble des thèmes précédents)',
        'L\'objectif est de trouver la bonne réponse le plus de fois sans te tromper.\nLe jeu devient de plus en plus difficile au fur et à mesure de la partie.\nUne mauvaise réponse met fin à la partie.',
        'Plus les questions s\'enchainent, plus ces dernières sont difficiles.\nAu bout d\'un certain nombre de réponses justes, des mauvaises réponses supplémentaires seront ajoutées.',
        'Pour t\'aider, 3 types de jockers sont disponibles dès le début du jeu.\n\nLe premier type de jocker divise le nombre de réponses possible par 2.\nLe deuxième type de jocker permet de choisir n\'importe quelle question sans craindre les conséquences si ce n\'est pas la bonne.\nLe 3ème type de jocker permet de passer la question qui vient d\'être posée.\n\nA un niveau avancé de la partie il est également possible pour le joueur de sauvegarder sa progression pour faire une pause et reprendre la partie au même point plus tard.'
    ];

    // Add a loop to generate the paragraphs.
    for (i=0; i < Paragraphs.length; i++) {
        addElement(Paragraphs[i], 'PRE', 'conversation__paragraph' + (i + 1));
    }

    // Create home button.
    createButton('choice__home', 'Accueil', home, choice);
}

// Create an element in html, like a paragraph.
function addElement (content, tagName, className) {
    const paragraph = document.createElement(tagName);
    paragraph.classList.add(className);
    conversation.appendChild(paragraph);
    paragraph.innerText = content;
}

// Create the home menu.
function home () {
    // Delete old menu.
    choice.innerHTML = '';
    conversation.innerHTML = '';
    result.innerHTML = '';
    answers.innerHTML = '';

    // Change the "play" button to continue the game if the player took a break.
    // Check if the last game was stopped for a break and continue the game if it was.
    if (backup) {
        turn = backup.savedTurn;
        score = backup.savedScore;
        goodAnswerValue = backup.savedGoodAnswerValue;
        themeObject = backup.savedThemeObject;
        theme = backup.savedTheme;    
        jockersNumber = backup.savedJockersNumber    
    
        // Generate home menu but wit continue button at the place of the play one.
        createButton('choice__begin', 'Reprendre la partie', play, choice);
        createButton('choice__game-rules', 'Règles du jeu', gameRules, choice);
        createButton('choice__table-score', 'Résultats', function() {
            tableScores = JSON.parse(localStorage.getItem('tableScores'));
            showTableScores();
            choice.innerHTML = '';
        }, choice);
        createButton('choice__contact', 'contact', contact, choice);
        createButton('choice__know-more', 'En savoir plus', informations, choice);
    
    } else {
        
        // Generate normal home menu.
        createButton('choice__begin', 'Jouer', start, choice);
        createButton('choice__game-rules', 'Règles du jeu', gameRules, choice);
        createButton('choice__table-score', 'Résultats', function() {
            tableScores = JSON.parse(localStorage.getItem('tableScores'));
            showTableScores();
            choice.innerHTML = '';
        }, choice);
        createButton('choice__contact', 'contact', contact, choice);
        createButton('choice__know-more', 'En savoir plus', informations, choice);
        
        // Remove buttons.
        answersBox.innerHTML = '';
    }
}

function contact () {
    // Delete old menu.
    choice.innerHTML = '';
    conversation.innerHTML = '';
    result.innerHTML = '';
    
    // Add text.
    addElement ('Pour toute remarque ou proposition, merci de joindre l\'équipe technique à l\'adresse suivante:', 'PRE', 'conversation__contact');
    addElement ('nchretien.gc@gmail.com', 'a', 'conversation__mail');

    // Create home button.
    createButton('choice__home', 'Accueil', home, choice);
}

function informations () {
    // Delete old menu.
    choice.innerHTML = '';
    conversation.innerHTML = '';
    result.innerHTML = '';
    
    // Add text.
    addElement ('Ce jeu a été développé par Nicolas CHRETIEN, développeur débutant.\nPour toute remarque ou idée d\'amélioration vous pouvez le joindre via la rubrique "contact"', 'PRE', 'conversation__information');

    // Create home button.
    createButton('choice__home', 'Accueil', home, choice);
}

    home();