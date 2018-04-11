process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');



const board = () => {
  console.log("  1 2 3")
  let board = "1|_|_|_|\n2|_|_|_|\n3|_|_|_|".split('');
  const positionMap = {
    '1,1': 2,
    '1,2': 4,
    '1,3': 6,
    '2,1': 11,
    '2,2': 13,
    '2,3': 15,
    '3,1': 20,
    '3,2': 22,
    '3,3': 24
  }
  // console.log(board.join(''));
  board[11] = 'O';
  board[24] = 'X';
  console.log(board.join(''));
  // console.log("1|_|_|_|\n2|_|_|_|\n3|_|_|_|")
}





class TicTacToeCli {
  constructor() {
    this.board = "1|_|_|_|\n2|_|_|_|\n3|_|_|_|".split('');
    this.player = 'X',
    this.complete = false;
    this.message = '';
    this.readMessage();
    this.positionMap = {
      '1,1': 2,
      '1,2': 4,
      '1,3': 6,
      '2,1': 11,
      '2,2': 13,
      '2,3': 15,
      '3,1': 20,
      '3,2': 22,
      '3,3': 24
    }
  }
  printBoard() {
    console.log("  1 2 3")
    console.log(this.board.join(''))
  }
  welcomeMessage() {
    console.log('Welcome to a wonderful game of CLI Tic-Tac-Toe!!');
    console.log("  1 2 3")
    console.log(this.board.join(''))
    console.log('Player 1 = X\nPLayer 2 = O\nPlayer 1 goes first, type the coordinate in n,n format to set your piece!')
    console.log("Type 'start' to begin!")

   
      if (this.message === 'quit') {
        this.endGame();
      } else if (this.message === 'start\n') {
        console.log('Waiting for player 1...')
      } else {
        this.setPiece(this.message)
      }
    }
  

  readMessage() {
    process.stdin.on('data', function (text) {
      // console.log('received data:', util.inspect(text));
      this.message = text.split('\n')[0];
    })
  }
  
  setPiece(pos) {

    this.board[this.positionMap[pos]] = this.player;
    this.player === 'X' ? this.player = 'O' : this.player = 'X';

  }

  endGame() {
    process.exit()
  }
      
  };

var newGame = new TicTacToeCli();

newGame.welcomeMessage()

