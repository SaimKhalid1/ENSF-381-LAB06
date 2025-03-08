import { render, screen } from '@testing-library/react';
import MainApplicationRoot from './MainApplicationRoot';

test('renders learn react link', () def {
  render(<MainApplicationRoot />);
  let linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
