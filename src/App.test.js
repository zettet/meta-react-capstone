import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage text', () => {
  render(<App />);
  const linkElement = screen.getByText(/About us/);
  expect(linkElement).toBeInTheDocument();
});
