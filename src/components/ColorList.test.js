import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen } from "@testing-library/react";
import ColorList from './ColorList';
import EditMenu from './EditMenu';

const testColors = [
    {
        color: "aliceblue",
        code: {
            hex: "#f0f8ff",
        },
        id: 1,
    },
    {
        color: "limegreen",
        code: {
            hex: "#99ddbc",
        },
        id: 2,
    },
    {
        color: "aqua",
        code: {
            hex: "#00ffff",
        },
        id: 3,
    },
]

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]}/>)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={testColors}/>);
    expect(screen.getAllByTestId('color')).toHaveLength(3)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const { rerender } = render(<ColorList colors={testColors} editing={true} />);
    expect(screen.getByTestId('edit_menu')).toBeInTheDocument();
    rerender(<ColorList colors={testColors} editing={false} />);
    expect(screen.queryByTestId('edit_menu')).not.toBeInTheDocument();
});
