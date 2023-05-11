const ExpenseDate = (props) => {

  const month = props.date.toLocaleString('en-EN', { month: 'long' })
  const year = props.date.getFullYear().toString().substr(-2)
  const day = props.date.toLocaleString().toString().substr(-20, 2)

  return (
    <div className='expense-item__part expense-date'>
      <p className='expense-date__text'> {day} ⋅ {month} ⋅ {year} </p>
    </div>
  )
}

export default ExpenseDate

