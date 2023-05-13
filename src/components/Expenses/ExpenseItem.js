import './ExpenseItem.css';
import ExpenseInfo from './ExpenseInfo';
import CostInfo from './CostInfo';
import Card from '../UI/Card';
import React, {useState} from 'react';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title)

  const changeTitleHandler = () => {
    setTitle('NEW')
    console.log(title)
  }
  
  return (
    <Card className="expense-item">
      <ExpenseInfo title={title} tag={props.tag} />
      <CostInfo cost={props.cost}  date={props.date}/>
    </Card>
  );
}

export default ExpenseItem;

