import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SignInContainer = styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right:0;
top: 0;
z-index: 0;
overflow: hidden;
background: #010101;
`


export const Icon = styled.h1`
font-size: 30px;
font-weight: bold;
display: flex;
justify-content: flex-start;
color: #fff;
margin-top: 20px;
cursor: pointer;

@media screen and (max-width:400px) {
    padding: 0px 20px;
}
`

export const FormWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;


@media screen and (max-width:400px) {
    padding: 0px 20px;
}
`

export const Form = styled.form`
display: grid;
max-width: 400px;
width: 100%;
height: auto;
margin: 0 auto;
background: #003400 ;
padding: 80px 32px;
border-radius: 4px;
margin-bottom: 40px;
`

export const FormH1 = styled.h1`
text-align: center;
font-size: 20px;
margin-bottom: 40px;
color: #fff;
font-weight: 400;
`

// export const FormLabel = styled.label`
// margin-bottom: 2px;
// font-size: 14px;
// color: #fff;
// `
// export const FormInput = styled.input`
// margin: 10px;
// padding: 10px 15px;
// border: none;
// border-radius: 4px;
// `

export const SignInButton = styled(Link)`
text-align: center;
color: #010606;
background:#01bf71;
padding: 10px 15px;
margin: 10px;
margin-top: 30px;
font-size: 16px;
border-radius: 4px;
text-decoration: none;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover{
    color: #010101;
    background: #fff;
    transition: all 0.2s ease-in-out;
}
`

export const CopyRightText = styled.div`
color: #fff;
margin-top: 10px;
text-align: center;
`
