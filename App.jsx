import './App.css'

import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';
import styles from './App.module.css'
import { useState } from 'react';

function App(){

  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === "C" || buttonText === "X"){
      setCalVal("");
    } else if(buttonText === '='){
      const result = eval(calVal);
      setCalVal(result);
    }else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

    return <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} ></ButtonsContainer>
    </div>
  }

export default App
