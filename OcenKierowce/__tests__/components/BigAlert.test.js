import React from 'react';
import renderer from 'react-test-renderer';

import BigAlert from '../../src/components/BigAlert';

describe('<BigAlert />', () => {
  it('has 2 child', () => {
    const tree = renderer
      .create(
        <BigAlert
          alert={{
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
    expect(tree.children.length).toBe(2);
  });
});
