import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });

  it('motd api', async () => {
    const response = await fetch('http://localhost:4200/api/');
    const data = await response.json();

    expect(data).not.toBeFalsy();
  });
});
