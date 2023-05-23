const ExpenseInfo = (props) => {

  

  return(
    <div className="expense-item__part expense-info">
      <p className="expense-info__title">{props.title}</p>
      <p className="expense-info__tag">Tag: { props.tag }</p>
    </div>
  )
}

export default ExpenseInfo