import React, { useState } from "react";
import Expenses from "./Expenses/Expenses";
import NewExpenses from "./NewExpense/NewExpense";

const AppMain = () => {
  const INITIAL_EXPENSES = [
    {
      date: new Date(2022, 8, 7),
      title: 'Maxident',
      cost: 25,
      tag: 'album',
    },
    {
      date: new Date(2023, 0, 15),
      title: 'Brand New',
      cost: 18,
      tag: 'album',
    },
    {
      date: new Date(2023, 2, 14),
      title: 'Pizza',
      cost: 2,
      tag: 'food',
    },
    {
      date: new Date(2023, 2, 14),
      title: 'Temptation',
      cost: 22,
      tag: 'album',
    }
  ]

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  const saveExpensDataHandler = (newExpens) => {
    setExpenses(prevExpenses => {
      return [newExpens, ...prevExpenses]
    })
  }


  return (
    <div>
      <NewExpenses onAddExpens={saveExpensDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default AppMain