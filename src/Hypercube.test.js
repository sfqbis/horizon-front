import { render, screen } from '@testing-library/react';
import Hypercube from './Hypercube';

test('renders hypercube', () => {
  render(<Hypercube />);
  const linkElement = screen.getByText(/hypercube/i);
  expect(linkElement).toBeInTheDocument();
});
