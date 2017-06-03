/*eslint-disable */
import React from 'react'
import {mount} from 'enzyme'
import HomeComponent from '../../components/HomeComponent'

describe('HomeComponent', () => {
  it('renders HomeComponent', () => {
    const root = mount(<HomeComponent />)
    expect(root.find('.w100p').length).toBe(1)
    expect(root.find('HeaderComponent').length).toBe(1)
  });
});