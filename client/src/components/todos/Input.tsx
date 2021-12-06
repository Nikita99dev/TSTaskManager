import React, { useState } from "react";


interface InputI {
  input: string,
  setInput: (a:any)=> void
  submit: (e:any)=>void
}

export const Input: React.FC<InputI> = ({input, submit}) => {


  return (
    <input value={input} onChange={submit}/>
  )
}
