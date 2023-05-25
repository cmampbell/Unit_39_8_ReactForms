import React from 'react';
import { render } from "@testing-library/react";
import Box from './Box';


it('renders without crashing', function() {
    render(<Box boxStyle={{height: 10, width: 10, color: '#000000'}}/>);
});

it('matches snapshot', function() {
    const {asFragment} = render(<Box boxStyle={{height: 10, width: 10, color: '#000000'}}/>);
    expect(asFragment()).toMatchSnapshot();
});