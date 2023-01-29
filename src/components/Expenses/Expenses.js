import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css'
import { useState } from 'react';

const Expenses = (props) => {
  const [items, setItems] = useState(props.items);
  const [filterYear, setFilterYear] = useState('');

  const onChangeYearHandler = (inputYear) => {
    setFilterYear(inputYear);
  }

  const filteredItems = items.filter((item) => item.date.getFullYear().toString()  === filterYear);

  const expenseItems = filteredItems.map((expense, index) =>
    <ExpenseItem
      key={index}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter onChangeYear={onChangeYearHandler}/>
      {expenseItems}
    </Card>
  );

}

export default Expenses;