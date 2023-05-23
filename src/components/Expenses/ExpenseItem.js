import './ExpenseItem.css';
import ExpenseInfo from './ExpenseInfo';
import CostInfo from './CostInfo';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseInfo title={props.title} tag={props.tag} />
      <CostInfo cost={props.cost}  date={props.date}/>
    </Card>
  );
}

export default ExpenseItem;

