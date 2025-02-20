const chessboard = document.getElementById("chessboard");
const board = [];
const pieces = {
    "♜": [0, 7], "♞": [1, 6], "♝": [2, 5], "♛": [3], "♚": [4],
    "♟": [0, 1, 2, 3, 4, 5, 6, 7]
};
const initialSetup = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
];

let selectedSquare = null;

function createBoard() {
    for (let row = 0; row < 8; row++) {
        board[row] = [];
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.classList.add("square", (row + col) % 2 === 0 ? "white" : "black");
            square.dataset.row = row;
            square.dataset.col = col;
            square.textContent = initialSetup[row][col];
            square.addEventListener("click", () => selectPiece(square));
            board[row][col] = square;
            chessboard.appendChild(square);
        }
    }
}

function selectPiece(square) {
    if (selectedSquare) {
        movePiece(square);
    } else if (square.textContent) {
        selectedSquare = square;
    }
}

function movePiece(square) {
    square.textContent = selectedSquare.textContent;
    selectedSquare.textContent = "";
    selectedSquare = null;
}

createBoard();
