import React from 'react'
import { useState } from 'react'
import { SignInContainer, Icon, FormWrap, Form, FormH1, SignInButton, CopyRightText } from './SigninElements'
import FormInput from '../SignIn/FormInput'



const SigninTag = ()=> {
  const [values, setValues] = useState({
    Username: "",
    email: "",
    password: "",
  })

  const inputs = [
    {
      id:1,
      name:'username',
      type:'text',
      placeholder: 'Enter Username',
      errorMessage: 'Fill in correct Username',
      label: 'Username',
      Pattern: '^[A-za-z0-9]{4,13}',
      required: true
    },
    {
      id:2,
      name:'email',
      type:'Email',
      placeholder: 'Enter Email',
      errorMessage: 'Fill in valid email address ',
      label: 'Email',
      pattern:'',
      
    },
    {
      id:3,
      name:'password',
      type:'password',
      placeholder:'Enter Password',
      errorMessage: 'Password not correct!',
      label: 'Enter Password',
      Pattern:'^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$' ,
      required: true
    }
  ]

  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  
  const handleChange = (e) =>{
    setValues({...values, [e.target.name] : e.target.value})
  }
  console.log(values)
  return (
    <>
        <SignInContainer>
          <Icon to='/'>Global Tradez</Icon>
          <FormWrap>  
          <Form onSubmit={handleSubmit} >
            <FormH1>Welcome Back Investor</FormH1>

            {inputs.map((input) =>(
              <FormInput key={inputs.id} {...input} value={values[input.name]} onChange={handleChange} />
            ))}
           
             {/* <FormLabel htmlFor='Email'>Email</FormLabel> 
            <FormInput type='email' name='email' key={inputs.id} onChange={handleChange} value={values[inputs.name]} required />
            
            <FormLabel htmlFor='Password'>Password</FormLabel>
            <FormInput type='password' name='password' key={inputs.id} onChange={handleChange} value={values[inputs.name]} required/> */}

            
            
            
            <SignInButton>Login</SignInButton>
          </Form>
          <CopyRightText>Global Tradez &copy; {new Date().getFullYear()} All right reserved</CopyRightText>
          </FormWrap>
        </SignInContainer>
    </>
  )
}

export default SigninTag