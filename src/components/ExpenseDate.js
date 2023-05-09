function ExpenseDate(props) {

  const month = props.date.toLocaleString('ru-RU', { month: 'long' })
  const year = props.date.getFullYear().toString().substr(-2)
  const day = props.date.toLocaleString('ru-RU', { day: '2-digit' })

  return (
    <div className='expense-item__part expense-date'>
      <p className='expense-date__text'> {day} ⋅ {month} ⋅ {year} </p>
    </div>
  )
}

export default ExpenseDate