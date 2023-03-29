import React from 'react'
import { render, screen } from './utils/test-utils'
import App from './App'

describe('App.tsx', () => {
  it('should render Hello World text', () => {
    // Act
    render(<App />)
    // Assert
    expect(screen.getByText(/Hello World!/i)).toBeInTheDocument()
  })
})
