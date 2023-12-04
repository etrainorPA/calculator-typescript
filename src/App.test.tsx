import React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from './Layout'
import CalculatorBody from './CalculatorBody'

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders history box', () => {
    render(<Layout />)
    const linkElemt = screen.getByTestId('history-tab')
    expect(linkElemt).toBeInTheDocument()
})

test('renders calculator box', () => {
    render(<Layout />)
    const linkElemt = screen.getByTestId('calculator-tab')
    expect(linkElemt).toBeInTheDocument()
})

// no need to test every single one but test to make sure some buttons are showing...
// test('render button 7', () => {
//     render(<CalculatorBody />)
//     const linkElemt = screen.getByTestId('button-seven')
//     expect(linkElemt).toBeInTheDocument()
// })

// test('render button 5', () => {
//     render(<CalculatorBody />)
//     const linkElemt = screen.getByTestId('button-five')
//     expect(linkElemt).toBeInTheDocument()
// })

// test('render button X', () => {
//     render(<CalculatorBody />)
//     const linkElemt = screen.getByTestId('button-multiply')
//     expect(linkElemt).toBeInTheDocument()
// })

// test('render button equals', () => {
//     render(<CalculatorBody />)
//     const linkElemt = screen.getByTestId('button-equals')
//     expect(linkElemt).toBeInTheDocument()
// })

// test('render calculator display box', () => {
//     render(<CalculatorBody />)
//     const linkElemt = screen.getByTestId('calculator-number-display')
//     expect(linkElemt).toBeInTheDocument()
// })
