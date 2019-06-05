import React from 'react';
import renderer from 'react-test-renderer';

import Opinion from '../../src/components/Opinion';

describe('<Opinion />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Opinion
          opinion={{
            author: {
              anonymouns: true,
              uid: 'qVZHotniHyXWRbLBoXBeVaNs3jf2',
            },
            message: 'Wiadomosc',
            photo: true,
            plateNumber: 'SCI79308',
            region: 'śląskie',
            timeStamp: 1559207790870,
            type: 'DOWNVOTE',
            _id: '-Lg70giVOnhIWZIe9WkM',
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
