import React, { useState } from 'react';

import './ExpenseForm.css';


const ExpenseForm = (props) => {

    // Concept: Lifting state UP
    // pass data from child to parent using props and 
    // props got function from parent 


    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // combine the these multiple states
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // }); 

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // while updating multiple states use this method 
        // this is is saver way for updating the state in React 
        // because React schedule the state 
        // If your state update depends on the previous state use this func form!
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    };

    const submitHandler = (event) => {

        event.preventDefault();

        // gather the form data

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        // console.log(expenseData);


        // call the props from parent props function here
        // in this way, we can communicate between components as well as communicate up
        // in this way child component communicate with parent component
        props.onSaveExpenseData(expenseData);

        // now clear the enter value after form submit
        // key concept in the React i.e Two way binding
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };


    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">

        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler} />    
        </div>
        
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />    
        </div>
          
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />    
        </div>

        </div>

        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>

    </form>
    );
};


export default ExpenseForm;