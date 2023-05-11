import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"

const Costs = (props) => {
  const costs = props.costs
  return (
    <Card className="costs-wrapper">
      {costs.map((expenseItem, index) =>
        <ExpenseItem
          key={index}
          date={expenseItem.date}
          title={expenseItem.title}
          cost={expenseItem.cost}
          tag={expenseItem.tag}
        />
      )}
    </Card>
  )
}

export default Costs 