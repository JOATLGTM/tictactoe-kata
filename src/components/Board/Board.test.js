import React from 'react'
import { shallow, mount } from 'enzyme'
import Board from './Board'
import Square from '../Square/Square'

describe('Board component', () => {
    let component
    let onClick
    
    beforeEach(() => {
        component = shallow(<Board />)
        onClick = jest.fn();
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('renders component', () => {
        expect(component).toHaveLength(1)
    })

    it('should render 9 `<Square />', () => {
        let squares = Array(9).fill(<Square onClick={onClick} value={''}/>)
        component = mount(<Board squares={squares}/>);
        expect(component.containsAllMatchingElements([<Square />])).toEqual(true)
    })

    it('calls onClick event on a board square', () => {
        let squares = Array(9).fill(<Square onClick={onClick} value={''}/>)
        component = mount(<Board squares={squares} onClick={onClick}/>);
        component.find('button').first().simulate('click');
        expect(onClick.mock.calls.length).toEqual(1)
      })
})