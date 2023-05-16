const ExpenseSortOption = (props) => {
  const yearsList = props.expenses.map(item => {
    return item.date.getFullYear()
  })

  const uniqYears = Array.from(new Set(yearsList))

  const sortedYears = uniqYears.sort(function (a, b) {
    return a - b;
  })

  const options = sortedYears.map((year, index) => <option value={year} key={index}>{year}</option>)

  return (
    <select className="sort-block__select">
      {options}
    </select>
  )
}

export default ExpenseSortOption