import React from 'react'
import { shallow, mount } from 'enzyme'
import Game from './Game'
import Board from '../Board/Board'

describe('Game component', () => {
    it('renders component', () => {
        const component = shallow(<Game />)
        expect(component).toHaveLength(1)
    })

    it('renders Board component', () => {
        const component = mount(<Game />)
        expect(component.containsMatchingElement(<Board />)).toEqual(true)
    })

    it(`should prompt the player`, () => {
        const component = mount(<Game />)
        expect(component.find('.player-prompt').text()).toBe(`Player one's turn`)
    })

    it('should keep track of whose turn it is', () => {
        const component = mount(<Game />)
        component.find('button').first().simulate('click')
        expect(component.find('.player-prompt').text()).toBe(`Player two's turn`)
    });

    it(`should render 'X' when clicked and 'O' on second click`, () => {
        const component = mount(<Game />)
        component.find('button').first().simulate('click')
        expect(component.find('button').first().text()).toBe('X')
        component.find('button').last().simulate('click')
        expect(component.find('button').last().text()).toBe('O')
    })

    it('should tell you if someone won', () => {
        const component = mount(<Game />)
        const moveSequence = [0, 3, 1, 4, 2];
    
        moveSequence.forEach(index => {
          component.find('button').at(index).simulate('click');
        });
    
        expect(component.find('.result').text()).toBe('Player One Wins!');
    });

    it('should tell you if its a draw', () => {
        const component = mount(<Game />)
        const moveSequence = [0, 1, 2, 6, 7, 8, 3, 4, 5];
    
        moveSequence.forEach(index => {
          component.find('button').at(index).simulate('click');
        });
    
        expect(component.find('.result').text()).toBe('Draw');
    });

    it('should rewind when you click the rewind button', () => {
        const component = mount(<Game />)
        component.find('button').last().simulate('click');
        component.find('.prevState').simulate('click');
        expect(component.find('button').last().text()).toBe('');
    });
})