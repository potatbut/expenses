import ExpenseSortOption from "../ExpensSort/ExpenseSortOption"
import './ExpensSort.css'

const ExpenseSort = (props) => {
  const expenses = props.expenses

  const getSelectedYear = (selectedYear) => {
    props.sortYearHandler(selectedYear)
  }

  return (
    <div className="sort-block">
      <p className="sort-block__text">Sort by year</p>
      <ExpenseSortOption defaultYear={props.defaultYear} expenses={expenses} onYearSelect={getSelectedYear} />
    </div>
  )

}

export default ExpenseSort