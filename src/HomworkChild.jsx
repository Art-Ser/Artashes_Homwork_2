import React from 'react'

export const HomworkChild = (props) => {
  
    const {value, handleChange} =props;
    
    return (
    <div>
        <input type="text" value={value} onChange={(evt)=>{
         handleChange(evt.target.value)
         }}></input>
    </div>
  )
} 
export default HomworkChild;



