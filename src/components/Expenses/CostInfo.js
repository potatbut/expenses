
import ExpenseDate from './ExpenseDate';

const CostInfo = (props) => {
  return (
    <div className="expense-cost">
      <p className="expense-cost__price">${props.cost}</p>
      <ExpenseDate date={props.date} />
    </div>
  )
}

export default CostInfo