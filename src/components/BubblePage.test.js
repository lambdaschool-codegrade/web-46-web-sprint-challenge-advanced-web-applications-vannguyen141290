import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';
import fetchColorService from '../services/fetchColorService';
jest.mock('../services/fetchColorService');

test("Renders without errors", ()=> {
    render(<BubblePage/>)
});

test("Renders appropriate number of colors passed in through mock", async ()=> {

    render(<BubblePage/>);

    fetchColorService.mockResolvedValueOnce([
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
    ]);

    // const colors = await screen.findAllByTestId('color');
    // console.log(colors)



});