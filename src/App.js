import './App.css';
import { useState } from 'react';
import HomworkChild from './HomworkChild';


function App() {
  const [value, setValue]=useState ("");

  const handleChange=(text)=>{
    setValue(text)
    console.log(text);
     
  }


  return (
    <>
      <HomworkChild handleChange={handleChange} value={value}/>

    </>
  );
  
}

export default App;
