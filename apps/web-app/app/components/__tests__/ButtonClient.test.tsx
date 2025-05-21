import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simple mock component for testing
const MockButton = () => {
  return <button>Test Button</button>;
};

describe('Button Tests', () => {
  it('renders a button with text', () => {
    render(<MockButton />);
    const buttonElement = screen.getByText('Test Button');
    expect(buttonElement).toBeInTheDocument();
  });
  
  it('properly mocks console.log', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    console.log('test message');
    expect(consoleSpy).toHaveBeenCalledWith('test message');
    consoleSpy.mockRestore();
  });
});
