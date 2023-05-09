import ExpenseItem from "./ExpenseItem"

function Costs(props) {
  const costs = props.costs
  return (
    <div className="costs-wrapper">
      {costs.map((expenseItem, index) =>
        <ExpenseItem
          key={index}
          date={expenseItem.date}
          title={expenseItem.title}
          cost={expenseItem.cost}
          tag={expenseItem.tag}
        />
      )}
    </div>
  )
}

export default Costs