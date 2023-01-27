import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses(props) {
  const items = props.items.map((expense) =>
  <ExpenseItem 
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />)

  return <div className='expenses'>{items}</div>;

}

export default Expenses;