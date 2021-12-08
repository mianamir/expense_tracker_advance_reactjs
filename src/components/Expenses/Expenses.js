import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import '../UI/Card.css';


const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    
    return expense.date.getFullYear().toString() === filteredYear;

  });

  let expenseContent = <p>No expenses found!</p>

  if (filteredExpenses.length > 0){
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
      key={expense.id} 
      title={expense.title} 
      amount={expense.amount}
      date={expense.date}
      />
      ))
  };

  return (
  
      <Card className="expenses">
        <ExpensesFilter 
        selected={filteredYear} 
        onChangeHandler={filterChangeHandler}
        />
        
        {expenseContent}
        
        
      </Card>
    );
};

export default Expenses;