import { render, screen } from '@testing-library/react';
import Title from './Title';

test('renders title', () => {
  render(<Title />);
  const linkElement = screen.getByText(/horizon/i);
  expect(linkElement).toBeInTheDocument();
});
