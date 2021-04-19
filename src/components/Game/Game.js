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

        return (
            <div>
                <Board 
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}
                />
                <div className="player-prompt">
                    {this.state.playerOne ? `Player one's` : `Player two's`} turn
                </div>
            </div>
        )
    }
}