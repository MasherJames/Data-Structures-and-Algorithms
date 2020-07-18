class SnakesLadders {
  constructor() {
    this.players = { 1: 0, 2: 0 };
    this.currentPlayer = null;
    this.nextPlayer = null;
    this.board = {
      ladder: {
        2: 38,
        7: 14,
        8: 31,
        15: 26,
        21: 42,
        28: 84,
        36: 44,
        51: 67,
        71: 91,
        78: 98,
        87: 94,
      },
      snake: {
        16: 6,
        46: 25,
        49: 11,
        62: 19,
        64: 60,
        74: 53,
        89: 68,
        92: 88,
        95: 75,
        99: 80,
      },
    };
  }
  // Trigger game
  play(die1, die2) {
    // Check if game is over
    const isGameOver = this.players[1] === 100 || this.players[2] === 100;
    if (isGameOver) {
      return "Game over!";
    }

    if (this.currentPlayer === null && this.nextPlayer === null) {
      // game starts with player 1
      this.currentPlayer = 1;
    } else {
      this.currentPlayer = this.nextPlayer;
    }
    if (die1 === die2) {
      this.nextPlayer = this.currentPlayer;
    } else {
      this.nextPlayer = this.currentPlayer === 1 ? 2 : 1;
    }

    const sum = die1 + die2;
    this.players[this.currentPlayer] += sum;
    const currentValue = this.players[this.currentPlayer];
    const { ladder, snake } = this.board;

    if (ladder[currentValue] || snake[currentValue]) {
      this.players[this.currentPlayer] = ladder[currentValue]
        ? ladder[currentValue]
        : snake[currentValue];
    }

    // Bounce score back of it exceeds 100
    if (this.players[this.currentPlayer] > 100) {
      const backSteps = this.players[this.currentPlayer] - 100;
      const newScore = 100 - backSteps;
      this.players[this.currentPlayer] = snake[newScore]
        ? snake[newScore]
        : newScore;
    }

    // Check if the current player has won
    if (this.players[this.currentPlayer] === 100) {
      return `Player ${this.currentPlayer} Wins!`;
    }

    // Return position of the current player
    return `Player ${this.currentPlayer} is on square ${
      this.players[this.currentPlayer]
    }`;
  }
}

const game = new SnakesLadders();
console.log(game.play(1, 1));
console.log(game.play(1, 5));
console.log(game.play(6, 2));
console.log(game.play(1, 1));
