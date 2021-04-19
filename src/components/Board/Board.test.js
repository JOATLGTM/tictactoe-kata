import React from 'react'
import { shallow, mount } from 'enzyme'
import Board from './Board'

describe('Board component', () => {
    it('renders component', () => {
        const component = shallow(<Board />)
        expect(component).toHaveLength(1)
    })
})