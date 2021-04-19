import React, { Component } from 'react'
import Board from '../Board/Board'

export default class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            playerOne: true,        
        }
    }

    handleClick = i => {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
          }
        squares[i] = this.state.playerOne ? 'X' : 'O';
        this.setState({
          history: history.concat([{
            squares: squares,
          }]),
            playerOne: !this.state.playerOne,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[history.length - 1]
        const winner = calculateWinner(current.squares);
        let status;
        if (winner) {
          status = winner === 'X' ? 'Player One Wins!' : 'Player Two Wins!'
        } 
        return (
            <div>
                <Board 
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}
                />
                <div className="player-prompt">
                    {winner ? '' : this.state.playerOne ? `Player one's turn` : `Player two's turn`}
                </div>
                <div className="result">
                    {status}
                </div>
            </div>
        )
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }