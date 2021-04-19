import React from 'react'
import { shallow, mount } from 'enzyme'
import Board from './Board'
import Square from '../Square/Square'

describe('Board component', () => {
    it('renders component', () => {
        let component = shallow(<Board />)
        expect(component).toHaveLength(1)
    })

    it('should render 9 `<Square />', () => {
        const onClick = jest.fn();
        let squares = Array(9).fill(<Square onClick={onClick} value={''}/>)
        let component = mount(<Board squares={squares}/>);
        expect(component.containsAllMatchingElements([<Square />])).toEqual(true)
    })
})