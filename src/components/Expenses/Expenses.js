import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
import './Expenses.css'

const Expenses = (props) => {
  const items = props.items.map((expense) =>
  <ExpenseItem 
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />)

  return <Card className='expenses'>{items}</Card>;

}

export default Expenses;