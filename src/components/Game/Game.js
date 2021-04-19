import React, { Component } from 'react'
import Board from '../Board/Board'

export default class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            
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
