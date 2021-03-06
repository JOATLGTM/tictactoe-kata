import React from 'react'
import { shallow, mount } from 'enzyme'
import Game from './Game'
import Board from '../Board/Board'

describe('Game component', () => {

    let component
    beforeEach(() => {
        component = mount(<Game />)
    })

    it('renders Board component', () => {
        expect(component.containsMatchingElement(<Board />)).toEqual(true)
    })

    it(`should prompt the player`, () => {
        expect(component.find('.player-prompt').text()).toBe(`Player one's turn`)
    })

    it('should keep track of whose turn it is', () => {
        component.find('button').first().simulate('click')
        expect(component.find('.player-prompt').text()).toBe(`Player two's turn`)
    });

    it(`should render 'X' when clicked and 'O' on second click`, () => {
        component.find('button').first().simulate('click')
        expect(component.find('button').first().text()).toBe('X')
        component.find('button').at(2).simulate('click')
        expect(component.find('button').at(2).text()).toBe('O')
    })

    it('should tell you if someone won', () => {
        const moveSequence = [0, 3, 1, 4, 2];
    
        moveSequence.forEach(index => {
          component.find('button').at(index).simulate('click');
        });
    
        expect(component.find('.result').text()).toBe('Player One Wins!');
    });

    it('should tell you if its a draw', () => {
        const moveSequence = [0, 1, 2, 6, 7, 8, 3, 4, 5];
    
        moveSequence.forEach(index => {
          component.find('button').at(index).simulate('click');
        });
    
        expect(component.find('.result').text()).toBe('Draw');
    });

    it('should rewind when you click the rewind button', () => {
        component.find('button').first().simulate('click');
        expect(component.find('button').first().text()).toBe('X');
        component.find('.prevBtn').simulate('click');
        expect(component.find('button').first().text()).toBe('');
    });

    it('should reset state when you click the reset button', () => {
        const moveSequence = [0, 1];

        moveSequence.forEach(index => {
            component.find('button').at(index).simulate('click');
        });

        expect(component.find('button').first().text()).toBe('X')
        expect(component.find('button').at(1).text()).toBe('O')

        component.find('.resetBtn').simulate('click')
        expect(component.find('button').first().text()).toBe('')
        expect(component.find('button').at(1).text()).toBe('')
    })
})