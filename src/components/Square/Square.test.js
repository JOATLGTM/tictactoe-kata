import React from 'react'
import { shallow, mount } from 'enzyme'
import Square from './Square'

describe('Square component', () => {
    it('renders component', () => {
        const component = shallow(<Square />)
        expect(component).toHaveLength(1)
    })

    it('renders <button />', () => {
        const component = shallow(<Square />)
        expect(component.find('button').length).toEqual(1)
    })

    it('button is clickable', () => {
        let mockCallBack = jest.fn()
        const component = shallow(<Square onClick={mockCallBack}/>)
        component.find('button').simulate('click')
        expect(mockCallBack.mock.calls.length).toEqual(1);
    })

    it('should default to an empty state', () => {
        let mockCallBack = jest.fn()
        const component = shallow(<Square onClick={mockCallBack}/>)
        expect(component.text()).toBe('')
    })

    it(`should render string 'X' if props passed down`, () => {
        let mockCallBack = jest.fn()
        const component = shallow(<Square onClick={mockCallBack} value={'X'}/>)
        expect(component.text()).toBe('X')
    })

    it(`should render string 'O' if props passed down`, () => {
        let mockCallBack = jest.fn()
        const component = shallow(<Square onClick={mockCallBack} value={'O'}/>)
        expect(component.text()).toBe('O')
    })
})