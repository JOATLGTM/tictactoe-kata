import React from 'react'
import { shallow, mount } from 'enzyme'
import Board from './Board'
import Square from '../Square/Square'

describe('Board component', () => {
    it('renders component', () => {
        let component = shallow(<Board />)
        expect(component).toHaveLength(1)
    })
})