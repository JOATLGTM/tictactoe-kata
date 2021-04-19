import React from 'react'
import { shallow, mount } from 'enzyme'
import Game from './Game'

describe('Game component', () => {
    it('renders component', () => {
        const component = shallow(<Game />)
        expect(component).toHaveLength(1)
    })
})