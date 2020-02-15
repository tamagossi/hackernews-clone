/* eslint-disable no-undef */
import React from 'react';

import { shallow } from 'enzyme';
import Navbar from './'

describe(`Navbar component`, () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contains image wrapper', () => {
    expect(
      wrapper.find(`.menu-wrapper`).length
    ).toEqual(1)
  })

  it('should contains title wrapper', () => {
    expect(
      wrapper.find(`.menu-title`).length
    ).toEqual(1)
  })
});