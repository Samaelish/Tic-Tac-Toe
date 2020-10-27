/*
Game Status
*/
const statusDisplay = document.querySelector('.game--status');
/*
Variables for game state tracking
*/

/*
gameActive variable for game pause
*/
let gameActive = true;
/*
Storing current player to track each player's turn
*/
let currentPlayer = "X";
/*
Storing the current game state here, the form of empty strings in an array
will allow to easily track played cells and validate the game state later on
*/
let gameState = ["", "", "", "", "", "", "", "", ""];
/*
Messages that will display to user during the game.
Due to having dynamic factors it is necessary to create them as functions, so that the actual message gets created with current data every time.
*/
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
/*
Initial message to show player's turn
*/
statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed() {

}
function handlePlayerChange() {

}
function handleResultValidation() {

}
function handleCellClick() {

}
function handleRestartGame() {

}
/*
Event listeners to the actual game cells, as well as restart button
*/
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);