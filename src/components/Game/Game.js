import React, { Component } from 'react'
import Board from '../Board/Board'

export default class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            playerOne: true,
            increment: 0,
            squares: Array(9).fill(null)
        }
    }

    render() {
        return (
            <div>
                <Board />
            </div>
        )
    }
}
