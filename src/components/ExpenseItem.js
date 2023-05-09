import './ExpenseItem.css';
import ExpenseInfo from './ExpenseInfo';
import CostInfo from './CostInfo';

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      {/* <ExpenseDate date={props.date} /> */}
      <ExpenseInfo title={props.title} tag={props.tag} />
      <CostInfo cost={props.cost}  date={props.date}/>
    </div>
  );
}

export default ExpenseItem;

