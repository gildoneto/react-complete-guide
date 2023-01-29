import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css'
import { useState } from 'react';

const Expenses = (props) => {
  const [items, setItems] = useState(props.items);
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredItems = items.filter((item) => item.date.getFullYear().toString()  === filteredYear);

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
      <ExpensesFilter 
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseItems}
    </Card>
  );

}

export default Expenses;