import React from 'react';
import renderer from 'react-test-renderer';

import BackButton from '../../src/components/BackButton';

describe('<BackButton />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<BackButton />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<BackButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
