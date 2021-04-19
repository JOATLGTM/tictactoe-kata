import React from 'react'
import { shallow, mount } from 'enzyme'
import Square from './Square'

describe('Square component', () => {
    let component;
    let mockCallBack;
    beforeEach(() => {
        mockCallBack = jest.fn()
        component = shallow(<Square onClick={mockCallBack}/>)
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('renders component', () => {
        expect(component).toHaveLength(1)
    })

    it('renders <button />', () => {
        expect(component.find('button').length).toEqual(1)
    })

    it('button is clickable', () => {
        component.find('button').simulate('click')
        expect(mockCallBack.mock.calls.length).toEqual(1);
    })

    it('should default to an empty state', () => {
        expect(component.text()).toBe('')
    })

    it(`should render string 'X' if props passed down`, () => {
        const component = shallow(<Square onClick={mockCallBack} value={'X'}/>)
        expect(component.text()).toBe('X')
    })

    it(`should render string 'O' if props passed down`, () => {
        const component = shallow(<Square onClick={mockCallBack} value={'O'}/>)
        expect(component.text()).toBe('O')
    })
})