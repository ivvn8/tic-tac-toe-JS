for (let i = 0; i < 9; i++) {
    document.querySelector('.field').innerHTML += '<div class="square"></div>'
}

let count = 0;
let win = false;
let squares = document.querySelectorAll('.square');
let historyX = 0;
let historyO = 0;
let player = 'X';

function isWinner() {
    let winnerLine = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ]
    let s = event.target.textContent;
    for (let i = 0; i < winnerLine.length; i++) {
        if (squares[winnerLine[i][0]].textContent == s
            && squares[winnerLine[i][1]].textContent == s
            && squares[winnerLine[i][2]].textContent == s) {
            win = true;
            alert(s + ' win')
            if (s == 'X') {
                historyX++;
                document.querySelector('.X').textContent = historyX;
            }
            if (s == 'O') {
                historyO++;
                document.querySelector('.O').textContent = historyO;
            }
            setTimeout(newGame, 3000)
        }
    }
}

function step() {
    event.target.textContent = (count % 2 == 0) ? 'X' : 'O';
    count++;
    isWinner();
    draw();
    console.log(win)
}

function draw() {
    if (count == 9 && win == false && player == 'X') {
        alert('draw')
        setTimeout(newGame, 3000)
    }
    if (count == 10 && win == false && player == 'O') {
        alert('draw')
        setTimeout(newGame, 3000)
    }
}

function newGame() {
    count = 0;
    player = 'X';
    win = false;
    for (let i = 0; i < 9; i++) {
        squares[i].textContent = ''
    }
    document.querySelector('.player').textContent = 'player: X'
}

function playerSelect() {
    let w = this.textContent;
    if (w == 'O') {
        count = 1;
        document.querySelector('.player').textContent = 'player: ' + w;
        player = 'O';
    }
    if (w == 'X') {
        count = 0;
        document.querySelector('.player').textContent = 'player: ' + w;
        player = 'X';
    }
}

document.querySelector('.btnPlayerX').addEventListener('click', playerSelect)

document.querySelector('.btnPlayerO').addEventListener('click', playerSelect)

document.querySelector('.newGame').addEventListener('click', newGame)

document.querySelector('.field').addEventListener('click', step)

