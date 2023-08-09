// ------------------------------------------- DECLARING PART ------------------------------------------

// Declare the variables that will be used in the game.
let currentQuestion = '';
let level = 'easy';
let score = 0;
let theme = '';
let themeObject = '';
let turn = 0;
let answers = [];
let selectedAnswer = '';
let goodAnswerValue = '';
let selectedQuestions = [];
let correctAnswerIndex = 0;
let jockersNumber = 3;
let jockers2Number = 3;
let jockers3Number = 3;
let deletedButtonIndex = [];
let buttonName = '';
let Name = '';
let Paragraphs = [];
let tableScores = [];
let image = '';
let scriptElements = [];
let frenchTheme = ''

    // I need to declare this variable before the conditions. It's going to be used if and only if it's the first turn to make a deep copy of selectedQuestions and make all the selected questions availables again if the player just restarted.
    let availablesQuestions = {};

let backup = JSON.parse(localStorage.getItem('backup'));

// body class.
const bodyclass = document.querySelector('.body');

// Take back the node parent where we want to write the messages for the customer.
const conversation = document.querySelector('.conversation');

// Take back the node parent where we want to create the buttons.
const choice = document.querySelector('.choice');

// Take back the node parent where we want to create the jocker's buttons.
const jocker = document.querySelector('.jocker');

// Take back the node parent where we want to put the results.
const result = document.querySelector('.result');
let playButton = document.querySelector('.choice__begin');

// The two next arrays stock the content and the foctions for the themes buttons.
let buttons = [];

// Select the corresponding div class.
let answersBox = document.querySelector('.answers');
let themeBox = document.querySelector('.theme');
