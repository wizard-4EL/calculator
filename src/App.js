import React from 'react';
import { useState } from 'react';
import './App.css';
import Button from './Components/Button';



const App = () => {
  const [value, setValue] = useState("");
  
  return (
    <div className="App">
      <div className='wrapper'>
        <div className="display">
          <input type="text" value={value} />
        </div>
        <div className="row">
          <Button sign={"AC"} onclick={() => setValue("")} />
          <Button   sign={"."} onclick = {e => setValue (value + e.target.value)}/>
          <Button  sign={"%"} onclick = {e => setValue (value + e.target.value)}/>
          <Button  sign={"/"} onclick = {e => setValue (value + e.target.value)}/>
        </div>

        <div className="row">
          <Button  sign={7} onclick = {e => setValue (value + e.target.value)}/>
          <Button  sign={8} onclick = {e => setValue (value + e.target.value)}/>
          <Button  sign={9} onclick = {e => setValue (value + e.target.value)}/>
          <Button sign={"x"} onclick={(e) => setValue(value + "*")} />
        </div>

        <div className="row">
          <Button  sign={4} onclick = {e => setValue (value + e.target.value)}/>
          <Button  sign={5} onclick = {e => setValue (value + e.target.value)}/>
          <Button  sign={6} onclick = {e => setValue (value + e.target.value)}/>
          <Button  sign={"-"} onclick = {e => setValue (value + e.target.value)}/>
        </div>

        <div className="row">
          <Button  sign={1} onclick = {e => setValue (value + e.target.value)}/>
          <Button  sign={2} onclick = {e => setValue (value + e.target.value)}/>
          <Button  sign={3} onclick = {e => setValue (value + e.target.value)}/>
          <Button   sign={"+"} onclick = {e => setValue (value + e.target.value)}/>
        </div>

        <div className="row">
          <Button  sign={"00"} onclick = {e => setValue (value + e.target.value)}/>
          <Button  sign={"0"} onclick = {e => setValue (value + e.target.value)}/>
          <Button  sign={"del"} onclick = {e => setValue (value.slice(0, -1))}/>
          <Button  sign={"="} onclick={() => setValue(eval(value))}/>
        </div>
       
         
         

      </div> 
   </div>
   
  )
}

export default App

