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
})