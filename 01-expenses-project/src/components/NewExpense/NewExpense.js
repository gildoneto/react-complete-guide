import { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm 
          onSaveExpenseData={onSaveExpenseDataHandler} 
          onCancel={stopEditingHandler}
        />
        )}
    </div>
  );
};

export default NewExpense;