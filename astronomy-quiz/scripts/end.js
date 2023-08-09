// -------------------------------------------- END PART ----------------------------------------------

function end () {
    // Delete choice elements.
    choice.innerHTML = ''

    // Show different messages if the customer won or if he made a mistake.
    if (selectedQuestions.length === 0) {
        conversation.textContent ='Félicitation! Tu as terminé le jeu pour le thème : ' + theme + '. Tu as répondu à toutes les questions! Ton score est de: ' + score + ' Tu as répondu à ' + turn + ' questions d\'affilé sans te tromper.';
    
    } else {
        conversation.textContent ='Félicitation! Ton score est de: ' + score + ' Tu as répondu à ' + (turn - 1) + ' questions d\'affilé sans te tromper.';
    }

    // Take back best scores in localStorage.
    tableScores = JSON.parse(localStorage.getItem('tableScores'));

    // Condition to take back localstorage(arrayScores) if it has already been created.
    if (tableScores === null || tableScores.length === 1) {
        console.log('not a single score registered');

        // Ask the player his name.
        sendName()

    } else {

        // Save if the score is higher than the lowest saved one.
        if (score > tableScores[0].score || tableScores.length < 20) {
            sendName();
        } else {
            createButton('choice__next', 'voir les résultats', showTableScores, choice);
    }
  }
}

// Function sending form to aske cutomer's name.
function sendName () {

    // Delete everything in choice html node.
    choice.innerHTML = '';

    // Creation form elements.
    const div = document.createElement('div');
    const label = document.createElement('label');
    const text = document.createElement('input');
    const buttonSend = document.createElement('button');

    // Set up elements.
    label.innerHTML = 'name';
    text.type = 'text';
    text.className = 'choice__name';
    buttonSend.type = 'button';
    buttonSend.innerText = 'Envoyer';
    buttonSend.addEventListener('click', save);

    // Add class.
    label.classList.add('choice__label');
    text.classList.add('choice__text-case');
    buttonSend.classList.add('choice__button-send');
    
    // Add elements in form.
    div.appendChild(label);
    div.appendChild(text);
    div.appendChild(buttonSend);
    choice.appendChild(div);
}

// Take back Name value.
function save () {

    // Select the name value.
    if (document.querySelector('.choice__name').value === '') {
        Name = 'non renseigné';
    } else {
        Name = document.querySelector('.choice__name').value;
    }
    console.log('name registered' + Name);

    console.log('french theme is ' + frenchTheme);

    // Create a score object to save data.
    const currentScoreData = {
        Name,
        score,
        turn: turn - 1,
        frenchTheme,
        HighestLevel: level
    }

    // Add current score to old scores array.
    if (tableScores === null) {
        tableScores = [currentScoreData];
    } else {
        tableScores.push(currentScoreData);
    }

    // Sort table scores according to scores.
    tableScores.sort((a, b) => a.score - b.score);

    // Delete the lowest score (the 21th).
    if (tableScores.length > 20){
        tableScores.splice(tableScores.length - 20, 1);
    }
    
    // Store the new array in the localStorage.
    localStorage.setItem('tableScores', JSON.stringify(tableScores));
    
    // Show the results.
    showTableScores();
}



// Create an array in html with a loop in the way to create 1 ligne per register score in tableScores.
function showTableScores () {

    // Change the button for a restart one.
    choice.innerHTML = '';
    createButton('choice__next', 'réessayer', start, answersBox);
    
    // Create home button.
    createButton('choice__home', 'Accueil', home, answersBox);


    // Delete everything in result html node.
    result.innerHTML = "";

    // Create table.
    // Create a paragraph node to add a class.
    const paragraphTable = document.createElement('p');
	const content = document.createTextNode('Meilleurs scores');
    paragraphTable.classList.add('result__table-title');
    paragraphTable.appendChild(content);
	result.appendChild(paragraphTable);

    const table = document.createElement('TABLE');
    table.classList.add('result__table');

    // Create table head.
    const header = table.createTHead();

    // Create a new ligne <tr> element and add it to the first position of <thead>.
    const hRow = header.insertRow(0);
    
    // Insert new cells (<td>) each one is inserted at the first position of the indicated <tr> element.
    // Add a class for each cell element.
    const hCell1 = hRow.insertCell(0);
    hCell1.classList.add('result__hcell');
    hCell1.innerHTML = 'Plus haut niveau atteint';
    const hCell2 = hRow.insertCell(0);
    hCell2.classList.add('result__hcell');
    hCell2.innerHTML = 'Thème choisi';
    const hCell3 = hRow.insertCell(0);
    hCell3.innerHTML = 'Nombre de bonnes réponses';
    hCell3.classList.add('result__hcell');
    const hCell4 = hRow.insertCell(0);
    hCell4.innerHTML = 'Score atteint';
    hCell4.classList.add('result__hcell');
    const hCell5 = hRow.insertCell(0);
    hCell5.innerHTML = 'Nom du joueur';
    hCell5.classList.add('result__hcell');
    const hCell6 = hRow.insertCell(0);
    hCell6.innerHTML = 'Rang';
    hCell6.classList.add('result__hcell');

    // Create table boddy.
    const body = table.createTBody();

    // Check if the localStorage is empty.
    if (tableScores === null) {
        result.textContent ='Il n\'y a pour l\'instant pas de scores enregistrés';
    } else {
        for (i = 0; i < tableScores.length; i++) {

            // Create a new ligne <tr> element and add it to the first position of <thead>.
            const bRow = body.insertRow(0);
    
            // Insert new cells (<td>) each one is inserted at the first position of the indicated <tr> element.
            const bCell1 = bRow.insertCell(0);
            bCell1.innerHTML = tableScores[i].HighestLevel;
            bCell1.classList.add('result__bcell');
            const bCell2 = bRow.insertCell(0);
            bCell2.innerHTML = tableScores[i].frenchTheme;
            bCell2.classList.add('result__bcell');
            const bCell3 = bRow.insertCell(0);
            bCell3.innerHTML = tableScores[i].turn;
            bCell3.classList.add('result__bcell');
            const bCell4 = bRow.insertCell(0);
            bCell4.innerHTML = tableScores[i].score;
            bCell4.classList.add('result__bcell');
            const bCell5 = bRow.insertCell(0);
            bCell5.innerHTML = tableScores[i].Name;
            bCell5.classList.add('result__bcell');
            const bCell6 = bRow.insertCell(0);
            bCell6.innerHTML = (tableScores.length - i);
            bCell6.classList.add('result__bcell');
        }
    
    }
    
    // Add the table in the html.
    result.appendChild(table);
}