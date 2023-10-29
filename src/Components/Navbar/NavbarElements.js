 import styled from 'styled-components';
 import {Link as LinkR} from 'react-router-dom';
 import {Link as LinkS} from 'react-scroll';

 export const Nav = styled.nav`
 //position:sticky;
 position: fixed;
 display: flex;
 align-items: center;
 justify-content: center;
 height: 80px;
 width: 100%;
 top: 0;
 background: #000;
 z-index: 10;

 @media screen and (max-width:980px){
    transition: all 0.3s ease-in-out;
 }
 `
 export const NavbarContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 text-align: center;
 height: 80px;
 width: 100%;
 padding: 0px 24px;
 z-index: 1;
 max-width: 1100px;

 `

export const NavLogo = styled(LinkR)`
display: flex;
align-items: center;
margin-left: 24px;
color: #fff;
justify-self: flex-start;
font-size: 24px;
cursor: pointer;
text-decoration: none;

@media screen and (max-width:768px){
    display: flex;
    justify-content: flex-start;
    margin-left: 5px;
}

`

export const MobileIcon = styled.div`
display: none;


@media screen and (max-width:768px){
display: block;
position: absolute;
top:0;
right: 0;
color: #fff;
font-size: 25px;
cursor: pointer;
transform: translate(-100%, 90%);
}
`

export const NavMenu = styled.ul`
display: flex;
justify-content: space-between;
text-align: center;


@media screen and (max-width:768px){
    display: none;
}
`
export const NavItem = styled.li`
padding-right: 1.5rem;
list-style: none;
text-decoration: none;
`
export const NavLink = styled(LinkS)`
color: #fff;
font-size: 18px;
cursor: pointer;
`

export const NavBtnWrapper = styled.div`
padding-right: 15px;
background:#000;
padding: 5px 11px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 30px;
`

export const NavBtn = styled(LinkR)`
color: #010606;
background:#01bf71;
padding: 10px 22px;
font-size: 16px;
border-radius: 20px;
text-decoration: none;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover{
    color: #01bf71;
    background: #fff;
    transition: all 0.2s ease-in-out;
}

@media screen and (max-width:768px){
    display: none;
}
`