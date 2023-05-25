import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import TodoList from './TodoList';


it('renders without crashing', function() {
    render(<TodoList />);
});

it('matches snapshot', function() {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it('adds todo on form submit', function() {
    const {getByLabelText, getByText} = render(<TodoList />);

    fireEvent.change(getByLabelText('Task:'), {target:{value:'Test'}})

    fireEvent.click(getByText('Add Todo'))

    expect(getByText('X')).toBeInTheDocument()
    expect(getByText('Test')).toBeInTheDocument()
})