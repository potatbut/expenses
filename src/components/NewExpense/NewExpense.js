import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = () => {
  return(
    <Card className="expense-wrapper">
      <ExpenseForm/>
    </Card>
  )
}

export default NewExpenses;