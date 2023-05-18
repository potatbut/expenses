import ExpenseItem from "./ExpenseItem"
import ExpenseSort from "./ExepnsSort"

import Card from "../UI/Card"

const Expenses = (props) => {
  const expenses = props.expenses
  const getSortYaer = (year) => {
    console.log(year)
  }
  return (
    <div className="expense-wrapper">
      <ExpenseSort expenses={expenses} sortYearHandler={getSortYaer} />
      <Card className="expenses-wrapper">
        {expenses.map((expenseItem, index) =>
          <ExpenseItem
            key={index}
            date={expenseItem.date}
            title={expenseItem.title}
            cost={expenseItem.cost}
            tag={expenseItem.tag}
          />
        )}
      </Card></div>
  )
}

export default Expenses 