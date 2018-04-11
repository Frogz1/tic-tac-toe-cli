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


board()


class TicTacToeCli {
  constructor() {
    this.board = "1|_|_|_|\n2|_|_|_|\n3|_|_|_|".split('');
  }

  welcomeMessage() {
    console.log('Welcome to a wonderful game of CLI Tic-Tac-Toe!!');
    console.log('Player 1 = X\nPLayer 2 = O\nPlayer 1 goes first, type the coordinate in n,n format to set your piece!')
    console.log("Type 'start' to begin!")
    let cmd = process.argv[0];
    if (cmd === 'start') {
      console.log('game started!')
    }
  }
}

game = new TicTacToeCli();
game.welcomeMessage()