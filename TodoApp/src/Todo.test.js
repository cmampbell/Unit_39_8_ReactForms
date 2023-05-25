import React from 'react';
import { render } from "@testing-library/react";
import Todo from './Todo';


it('renders without crashing', function() {
    render(<Todo text="Test"/>);
});

it('matches snapshot', function() {
    const {asFragment} = render(<Todo text="Test"/>);
    expect(asFragment()).toMatchSnapshot();
});