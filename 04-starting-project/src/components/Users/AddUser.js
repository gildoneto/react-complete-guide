import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  
  return (
    <>
    <ErrorModal title="An error occured!" message="Algo de errado não está certo!"/>
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input 
          id="username" 
          type="text" 
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="username">Age (Years)</label>
        <input 
        id="username" 
        type="number" 
        value={enteredAge}
        onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </>
  );
};

export default AddUser;