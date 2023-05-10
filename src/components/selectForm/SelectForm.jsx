import React, {useState} from "react";
import styles from './SelectForm.module.css'
import Backdrop from "../ui/Backdrop/Backdrop";

const arrow = <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1L6 6L11 1" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

const SelectForm = props => {

  const [isClicked, setIsClicked] = useState(false)

  const selectHandler = (name) => {
    setIsClicked(false)
    props.setSelect(name)
  }


  return (
      <div className={styles.SelectForm}>
        <div className={styles.input}>
        <div className={styles.inputContainer} onClick={() => setIsClicked(!isClicked)}>
          <input type='text'
                 placeholder={props.placeholder}
                 readOnly
                 value={props.value}
          />
          {arrow}
        </div>
        {isClicked ? <>
              <div className={styles.SelectItems}>
                {props.options.map((option, index) => (
                    <div className={styles.SelectItem} key={index}
                         onClick={() => selectHandler(option.label)}>
                      <div>{option.label}</div>
                    </div>
                ))}
              </div>

              {isClicked ? <Backdrop onClick={() => setIsClicked(false)}/> : null}

            </>
            : null
        }

        </div>
      </div>

  )
}
export default SelectForm
