import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {

    // call the react hooks inside the components not in nested functions
    const [title, setTitle] = useState(props.title);
    

    return (
       <li>
        <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}K</div>
        </div>
        </Card>
       </li>

    );
}

export default ExpenseItem;