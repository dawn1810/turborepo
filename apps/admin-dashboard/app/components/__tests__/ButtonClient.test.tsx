import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Mock the Button component from @repo/ui
jest.mock('@repo/ui', () => ({
  Button: ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
    <button onClick={onClick} data-testid="mocked-button">
      {children}
    </button>
  ),
}));

// Import after mocks are set up
import { ButtonClient } from '../ButtonClient';

// Mock console.log to check if it's called
const consoleSpy = jest.spyOn(console, 'log');

describe('ButtonClient component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    consoleSpy.mockClear();
  });

  it('renders the button with correct text', () => {
    render(<ButtonClient />);
    
    // Check if the button text is rendered
    const buttonElement = screen.getByText('Shared Button from UI Package');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls console.log with correct message when clicked', () => {
    render(<ButtonClient />);
    
    // Find the button
    const buttonElement = screen.getByText('Shared Button from UI Package');
    
    // Click the button
    fireEvent.click(buttonElement);
    
    // Check if console.log was called with the right message
    expect(consoleSpy).toHaveBeenCalledWith('Button clicked in Admin Dashboard!');
  });
});
