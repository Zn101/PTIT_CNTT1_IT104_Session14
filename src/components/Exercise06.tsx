import React, { useState } from "react";

export default function Exercise06() {
  const [gender, setGender] = useState<string>("");

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGender(event.target.value);
  }

  const handleSumbit = () => {
    console.log(gender);
  }

  return (    
    <div>
      <label htmlFor="">Gioi tinh</label>
      <input type="radio" id="Nam" name="gender" onChange={handleChangeInput}/>
      <label htmlFor="Nam" >Nam</label>
      <input type="radio" id="Nu" name="gender" onChange={handleChangeInput}/>
      <label htmlFor="Nu">Nu</label>
      <input type="radio" id="Khac"  name="gender" onChange={handleChangeInput}/>
      <label htmlFor="Khac">Khac</label>
      <button onClick={handleSumbit}>Submit</button>
    </div> 
  )
}
