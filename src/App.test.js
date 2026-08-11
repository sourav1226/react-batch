import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the workspace selector on the index route', () => {
  render(<App />);
  const heading = screen.getByText(/pedestal class room/i);
  expect(heading).toBeInTheDocument();
});
