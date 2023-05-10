import React from "react";
import styles from './TextArea.module.css'


const TextArea = props => {


  return (
      <div className={styles.TextArea}>

          <div className={styles.inputContainer}>
            <input type='text'
                   placeholder={props.placeholder}
                   readOnly={false}
                   value={props.value}
                   onChange={e => props.onChange(e.target.value)}
            />
          </div>

      </div>

  )
}
export default TextArea
