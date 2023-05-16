import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const saveExpensHandler = (inputExpens) => {
    props.onAddExpens(inputExpens)
  }
  return(
    <Card className="expense-wrapper">
      <ExpenseForm onSaveForm={saveExpensHandler} />
    </Card>
  )
}

export default NewExpenses;