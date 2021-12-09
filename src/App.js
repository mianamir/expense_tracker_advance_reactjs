import React, {useState} from 'react';

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Internet device',
    amount: 40.9,
    date: new Date(2021, 8, 28),
  },
  {
    id: 'e2',
    title: 'Home Water',
    amount: 30.9,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e3',
    title: 'Online tickets',
    amount: 60.9,
    date: new Date(2019, 6, 28),
  },
  {
    id: 'e4',
    title: 'Shopping',
    amount: 80.9,
    date: new Date(2019, 2, 28),
  },
];

const App = () => {
  
  // initialize the state with dummy data
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // update the expenses array but this is not the correct way to update the state
    // setExpenses([expense, ...expenses]);

    // use this way!
    setExpenses( prevExpenses => {
      return [expense, ...prevExpenses];
    });
  
  };


  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items= {expenses} />
    </div>
  );
  
}

export default App;
