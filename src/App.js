import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
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

  const saveExpensDataHandler = (newExpens)  => {
    expenses.push(newExpens)
    console.log(expenses)
  }


  return (
    <div>
      <NewExpenses onAddExpens={saveExpensDataHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

