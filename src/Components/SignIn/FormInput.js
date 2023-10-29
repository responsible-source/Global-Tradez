import React from 'react'
import { useState } from 'react'
import '../SignIn/Forminput.css'

const FormInput = (props) => {
    const {label, errorMessage, required, pattern, onChange, value, ...inputsProps } = props

    const [focused, setFocused] = useState(false);

    const handleFocus = ()=>{
      setFocused(!focused)
    }
  return (
    <div className='form-inputs'>
    <label>{label}</label>
    <input {...inputsProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
    <span> {errorMessage} {required}</span>
    </div>
  )
}

export default FormInput