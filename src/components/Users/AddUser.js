import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Wrapperr from "../Helpers/Wrapperr";
import ErrorModall from "../UI/error-module/ErrorModul";
import ReactDOM from "react-dom";
import Form from "../UI/form/Form";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isError, setIsError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsError({
        title: "Ошибка!",
        message: "Заполните все поля!",
      });
      return;
    }

    if (+enteredAge < 1) {
      setIsError({
        title: "Ошибка!",
        message: 'Некорректный возраст',
      });
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  console.log(isError);
  console.log(enteredAge);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const onConfirm = () => {
    setIsError(null);
  };

  return (
    <Wrapperr>
      {isError &&
        ReactDOM.createPortal(
          <ErrorModall {...isError} onConfirm={onConfirm} />,
          document.getElementById("modal-root")
        )}
      <Card className={classes.input}>
        <Form
          addUserHandler={addUserHandler}
          enteredAge={enteredAge}
          enteredUsername={enteredUsername}
          usernameChangeHandler={usernameChangeHandler}
          classes={classes}
          ageChangeHandler={ageChangeHandler}
        />
      </Card>
    </Wrapperr>
  );
};

export default AddUser;
