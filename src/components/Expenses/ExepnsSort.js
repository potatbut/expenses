import ExpenseSortOption from "./ExpenseSortOption"
const ExpenseSort = (props) => {
  const expenses = props.expenses
  return (
    <div className="sort-block">
      <p className="sort-block__text">Sort by year</p>
      <ExpenseSortOption expenses={expenses} />
    </div>
  )

}

export default ExpenseSort