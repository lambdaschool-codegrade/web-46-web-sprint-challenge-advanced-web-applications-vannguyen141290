import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const blankColor = {
    code: { hex: '' },
    color: "",
    id: ''
}

const testColor = {
    code: { hex: "#8a2be2" },
    color: "blueviolet",
    id: '11'
}

const handleDelete = jest.fn();
const toggleEdit = jest.fn()

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={blankColor} />)
});

test("Renders the color passed into component", () => {
    render(<Color color={testColor}/>);
    const colorText = screen.getByText(/blueviolet/i)
    expect(colorText).toBeInTheDocument();
});

// test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
//     render(<Color color={testColor} toggleEdit={toggleEdit} />);
//     const x = screen.getByTestId('delete');
//     userEvent.click(x);
//     //expect(toggleEdit).toBeCalled();
// });

// test("Executes setEditColor and toggleEdit property when color div is clicked", () => {

// });