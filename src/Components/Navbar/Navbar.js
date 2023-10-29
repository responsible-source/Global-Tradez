import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavBtnWrapper, NavBtn } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {
   
    const TopScroll = ()=>{
        scroll.scrollToTop()
    }


  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={TopScroll}>Global Tradez</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLink to='about'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='discover'>Discover</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='services'>Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/signin'>Sign in</NavLink>
                    </NavItem>
                </NavMenu>

                <NavBtnWrapper>
                    <NavBtn to='/signin'>Sign Up</NavBtn>
                </NavBtnWrapper>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar