/*eslint-disable */
import React from 'react'
import {shallow} from 'enzyme'
import HeaderComponent from '../../components/HeaderComponent'

describe('HeaderComponent', () => {
  it('renders HeaderComponent', () => {
    const root = shallow(<HeaderComponent />)
    expect(root.find('.headerContainer').length).toBe(1)
  });
});