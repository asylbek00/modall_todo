import React from "react";
import { Buttons } from "../../styles/Styles";
import Button from "../Button";
import Card from "../Card";
import styles from "./ErrorModule.module.css";

const ErrorModall = (props) => {
 

  return (
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          {props.isTrue ? (
            <>
              <Buttons onClick={() => props.filteredHandler(props.setId)}>
                Да
              </Buttons>
              <Buttons onClick={() => props.closeAnimationHandler(props.setId)}>
                Нет
              </Buttons>
            </>
          ) : (
            <Button onClick={props.onConfirm}>Хорошо</Button>
          )}
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModall;
