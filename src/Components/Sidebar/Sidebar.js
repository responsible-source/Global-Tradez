import React from 'react';
import { SidebarContainer, Close, CloseIcon, SidebarMenu, SidebarMenuItem, SidebarLink, SidebarBtnWrapper, SidebarBtn } from './SidebarElements';

const SideBar = ({toggle, isOpen}) => {
  return (
    <>
        <SidebarContainer isOpen={isOpen}>
            <Close onClick={toggle}>
              <CloseIcon />
            </Close>

            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarLink to='signin' onClick={toggle}>Sign up</SidebarLink>
              </SidebarMenuItem>
            </SidebarMenu>

            <SidebarBtnWrapper>
              <SidebarBtn to='Signin'>Sign In</SidebarBtn>
            </SidebarBtnWrapper>
        </SidebarContainer>
    </>
  )
}

export default SideBar