import { render } from '@testing-library/react';

import MOTD from './motd';

describe('MOTD', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MOTD />);
    expect(baseElement).toBeTruthy();
  });
});
