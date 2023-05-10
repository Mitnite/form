import styles from './App.module.css';
import SelectForm from "./components/selectForm/SelectForm";
import {level, meetingRoom, tower} from "./components/selectValues";
import React, {useState} from "react";
import Button from "./components/ui/Button/Button";
import TextArea from "./components/textArea/TextArea";
import {Calendar} from 'primereact/calendar';

const formValues = {
  towerSelect: '',
  levelSelect: '',
  meetingRoom: '',
  comment: '',
  date: '',
  time: ''
}


function App() {

  const [form, setForm] = useState(formValues)

  const [cls, setCls] = useState('')

  const submitHandler = () => {

    let check

    if (form.towerSelect && form.levelSelect && form.meetingRoom  && form.date && form.time) {
      check = ''
      const outputValues = {
        towerSelect: form.towerSelect,
        levelSelect: form.levelSelect,
        meetingRoom: form.meetingRoom,
        comment: form.comment || 'Нет комментариев',
        date: `${form.date.toLocaleString('Ru-ru')}`,
        time: `${form.time.getHours()}:${form.time.getMinutes()}`
      }
      setCls(check)

      console.log(JSON.stringify(outputValues))

    } else {
      check = 'has-error'
      setCls(check)
    }


  }

  const clearHandler = () => {
    setForm(formValues)
    setCls('')
  }

  return (
      <>
        <h1 style={{textAlign: 'center', margin: '25px 0 0 0'}}>Бронирование переговорной</h1>
        <div className={styles.App}>

          <div className={styles.Container}>

            <div className={styles.Form}>
              <div>
                <div className={styles.header}>Выбор даты</div>

                <div className={styles.checkContainer}>
                  <span className={styles.check}
                        style={cls.length > 0 ? form.date === '' ? {display: 'block'} : {display: 'none'} : {display: 'none'}}>
                    Необходимо заполнить поле</span>
                </div>

                <Calendar className={styles.Calendar}
                          value={form.date}
                          onChange={(e) => setForm(prev => ({...prev, date: e.value}))}
                          dateFormat="dd/mm/yy"
                          placeholder={'Выберете дату'}
                />

              </div>

              <div>
                <div className={styles.header}>Выбор времени</div>
                <div className={styles.checkContainer}>
                  <span className={styles.check}
                        style={cls.length > 0 ? form.time === '' ? {display: 'block'} : {display: 'none'} : {display: 'none'}}>
                    Необходимо заполнить поле</span>
                </div>
                <Calendar className={styles.Calendar}
                          value={form.time}
                          onChange={(e) => setForm(prev => ({...prev, time: e.value}))}
                          timeOnly
                          placeholder={'Выберете время'}
                />

              </div>

            </div>

            <div className={styles.Form}>
              <div>
                <div className={styles.header}>Выбор башни</div>
                <div className={styles.checkContainer}>
                  <span className={styles.check}
                        style={cls.length > 0 ? form.towerSelect === '' ? {display: 'block'} : {display: 'none'} : {display: 'none'}}>
                    Необходимо заполнить поле</span>
                </div>
                <SelectForm placeholder={'Выберете Башню'}
                    options={tower}
                    setSelect={(name) => setForm(prev => ({...prev, towerSelect: name}))}
                    value={form.towerSelect}
                />
              </div>
              <div>
                <div className={styles.header}>Выбор этажа</div>
                <div className={styles.checkContainer}>
                  <span className={styles.check}
                        style={cls.length > 0 ? form.levelSelect === '' ? {display: 'block'} : {display: 'none'} : {display: 'none'}}>
                    Необходимо заполнить поле</span>
                </div>
                <SelectForm placeholder={'Выберете этаж'}
                    options={level}
                    setSelect={(name) => setForm(prev => ({...prev, levelSelect: name}))}
                    value={form.levelSelect}
                />
              </div>
            </div>
            <div className={styles.Form}>
              <div>
                <div className={styles.header}>Выбор переговорки</div>
                <div className={styles.checkContainer}>
                  <span className={styles.check}
                        style={cls.length > 0 ? form.meetingRoom === '' ? {display: 'block'} : {display: 'none'} : {display: 'none'}}>
                    Необходимо заполнить поле</span>
                </div>
                <SelectForm placeholder={'Выберете переговорку'}
                            options={meetingRoom}
                            setSelect={(name) => setForm(prev => ({...prev, meetingRoom: name}))}
                            value={form.meetingRoom}
                />
              </div>
              <div>
                <div className={styles.header}>Комментарий</div>

              <TextArea
                        onChange={(name) => setForm(prev => ({...prev, comment: name}))}
                        value={form.comment}
              />
              </div>
            </div>


            <div className={styles.buttonContainer}>
              <Button onClick={submitHandler} name={'Отправить'}/>
              <Button onClick={clearHandler} name={'Очистить'}/>
            </div>
          </div>
        </div>
      </>

  );


}

export default App;
