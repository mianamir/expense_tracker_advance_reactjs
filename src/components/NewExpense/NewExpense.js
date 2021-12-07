import React from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';


const NewExpense = (props) => {
    /**
 Concept: Lifting state UP
 for passing data to the child from parent components use props

 for passing data from child to the parent components use custom props function check 
 blow code!
 */
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        // call the parent function pointer here
        props.onAddExpense(expenseData);

    };
    return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />    
    </div>
    );
};

export default NewExpense;