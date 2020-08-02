import React from './node_modules/react';
import { render } from './node_modules/@testing-library/react';
import Dashboard from './view';

test('renders learn react link', () => {
  const { getByText } = render(<Dashboard />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
