import React, { useState } from "react"

import ExpenseItem from "./ExpenseItem"
import ExpenseSort from "./ExpensSort/ExepnsSort"

import Card from "../UI/Card"

const Expenses = (props) => {

  const [defaultYear, setDefaultYear] = useState('2023')

  const expenses = props.expenses

  const getSortYaer = (year) => {
    setDefaultYear(year)
  }

  return (
    <div className="expense-wrapper">
      <ExpenseSort defaultYear={defaultYear} expenses={expenses} sortYearHandler={getSortYaer} />
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