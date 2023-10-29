import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';


export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
text-align: center;
top: 0;
left: 0;
transition: all 0.4s ease-in-out;
scroll-behavior: smooth;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
` 

export const Close = styled.div`
position: absolute;
top: 1.5rem;
right: 1.5rem;
background: transparent;
cursor: pointer;
font-size: 2rem;
`

export const CloseIcon = styled(FaTimes)`
color: #fff;
`

export const SidebarMenu = styled.ul`
display: block;
justify-content: center;
align-items: center;
text-align: center;
color: #fff;
margin-top: 50px;
`

export const SidebarMenuItem = styled.li`
list-style: none;
align-items: center;
text-decoration: none;
padding-top: 20px;
`

export const SidebarLink = styled(LinkS)`
color: #fff;
font-size: 1.7rem;
cursor: pointer;
text-decoration: none;
list-style: none;

&:hover{
    color: #01bf71;
}
`

export const SidebarBtnWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
margin-bottom: 20px;

`

export const SidebarBtn = styled(LinkR)`
border-radius: 30px;
color: #010606;
background: #01bf71;
white-space: nowrap;
padding: 10px 50px;
transition: all 0.2s ease-in-out;
text-decoration: none;
font-size: 1.4rem;

&:hover{
    color:#01bf71;
    background: #fff;
    transition: all 0.2s ease-in-out;
}
`


