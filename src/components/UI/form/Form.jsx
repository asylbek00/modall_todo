import React from 'react'
import Button from '../Button'

const Form = ({addUserHandler, enteredAge, enteredUsername, usernameChangeHandler, classes, ageChangeHandler}) => {
  return (
    <form onSubmit={addUserHandler}>
          <label htmlFor="username">Имя</label>
          <input
            id="username"
            className={classes.username}
            value={enteredUsername}
            type="text"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Возраст (лет)</label>
          <input
            id="age"
            className={classes.age}
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Добавить</Button>
        </form>
  )
}

export default Form
