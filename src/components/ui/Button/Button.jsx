import React from "react";
import styles from './Button.module.css'

const Button = (props) => {
  return (
      <React.Fragment>
        <button className={styles.Button} onClick={props.onClick}>{props.name}</button>
      </React.Fragment>
  )
}
export default Button
