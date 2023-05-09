function ExpenseInfo(props) {

  const emojis = {
    album: '💿',
    food: '🍟'
  }


  return(
    <div className="expense-item__part expense-info">
      <p className="expense-info__title">{props.title}</p>
      <p className="expense-info__tag">Tag: { emojis[props.tag]+ ' ' + props.tag }</p>
    </div>
  )
}

export default ExpenseInfo