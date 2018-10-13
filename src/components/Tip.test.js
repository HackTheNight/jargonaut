import React from 'react';
import { shallow, mount} from 'enzyme';
import Tip from './Tip';

it('renders without crashing', () => {
  shallow(<Tip />);
});

it('renders tip title', () => {
  const wrapper = mount(<Tip />);
  expect(wrapper.exists('.tip-title')).toEqual(true);
});

it('renders tip content', () => {
  const wrapper = mount(<Tip />);
  expect(wrapper.exists('.tip-content')).toEqual(true);
});

