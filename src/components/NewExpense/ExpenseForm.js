import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

  const [title, setTitle] = useState('')
  const [cost, setCost] = useState('')
  const [date, setDate] = useState('')
  const [tag, setTag] = useState('')


  const changeTitleHandler = (event) => {
    setTitle(event.target.value)
  }

  const changeCostHandler = (event) => {
    setCost(event.target.value)
  }


  const changeDateHandler = (event) => {
    setDate(event.target.value)
  }


  const changeTagHandler = (event) => {
    setTag(event.target.value)
  }


  const submitHandler = (event) => {
    event.preventDefault()
    
    const newData = {
      title: title,
      cost: cost,
      date: new Date(date),
      tag: tag
    }

    console.log(new FormData(document.querySelector('.expense-form')))

    props.onSaveForm(newData)
    setTitle('')
    setCost('')
    setDate('')
    setTag('')
  }

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <div className="expense-form__line expense-form__line_title">
        <label className="expense-form__line_label">Title</label>
        <input className="expense-form__line_input" type="text" onChange={changeTitleHandler} value={title}/>
      </div>

      <div className="expense-form__line expense-form__line_sum">
        <label className="expense-form__line_label">Sum</label>
        <input className="expense-form__line_input" type="number" min='0.01' step="0.01" onChange={changeCostHandler} value={cost}/>
      </div>

      <div className="expense-form__line expense-form__line_date">
        <label className="expense-form__line_label">Date</label>
        <input className="expense-form__line_input" type="date" onChange={changeDateHandler} value={date}/>
      </div>

      <div className="expense-form__line expense-form__line_tag">
        <label className="expense-form__line_label">Tag</label>
        <input className="expense-form__line_input" type="text" onChange={changeTagHandler} value={tag}/>
      </div>

      <div className="expense-form__line expense-form__line_buttons">
        <button className='expense-form__line_button' type="submit">Add expense</button>
        <button className='expense-form__line_button'>Cancel</button>
      </div>

    </form>
  )
}

export default ExpenseForm;