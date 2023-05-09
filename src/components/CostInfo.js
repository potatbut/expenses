
import ExpenseDate from './ExpenseDate';

function CostInfo(props) {
  return (
    <div className="expense-cost">
      <p className="expense-cost__price">${props.cost.toFixed(2)}</p>
      <ExpenseDate date={props.date} />
    </div>
  )
}

export default CostInfo