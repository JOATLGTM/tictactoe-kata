import React from 'react'
import { shallow, mount } from 'enzyme'
import Square from './Square'

describe('Square component', () => {
    it('renders component', () => {
        const component = shallow(<Square />)
        expect(component).toHaveLength(1)
    })
})