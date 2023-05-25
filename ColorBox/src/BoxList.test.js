import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import BoxList from './BoxList';


it('renders without crashing', function() {
    render(<BoxList />);
});

it('matches snapshot', function() {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it('adds box on form submit', function() {
    const {getByLabelText, getByText} = render(<BoxList />);

    fireEvent.change(getByLabelText('Height:'), {target:{value:400}})
    fireEvent.change(getByLabelText('Width:'), {target:{value:400}})
    fireEvent.change(getByLabelText('Color:'), {target:{value:'#a4a4a4'}})


    fireEvent.click(getByText('Create Box'))

    expect(getByText('X')).toBeInTheDocument()
})