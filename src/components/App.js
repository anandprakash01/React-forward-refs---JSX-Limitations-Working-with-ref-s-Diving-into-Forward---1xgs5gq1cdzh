import React ,{useRef,useState,useEffect,forwardRef} from 'react'
import '../styles/App.css';
import InputField from './InputField.js';
const App = () => {
  const [values,setValues]=useState('');
 const newRef=useRef(null);
 const textAreaRef=useRef(null);

const settingValue=()=>{
  const inputField = newRef.current;
  setValues(inputField.value);
}
const focusInput=()=>{
    newRef.current.focus();
}
 
  return (
    <div>
    <InputField  ref={newRef}  type="text"/><br/>
    <button id="settingValueButton" onClick={settingValue}>Set Value</button>
    <button id="focusInputButton" onClick={focusInput}>Focus the input</button><br/><br/>
     <textarea id="textarea" value={values}></textarea>

    </div>
  );
}


export default App;
