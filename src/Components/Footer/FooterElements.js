import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
background: #000;
`

export const FooterWrapper = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width:860px){
    padding-top: 32px;
}
`

export const FooterLinksWrapper = styled.div`
display: flex;

@media screen and (max-width: 860px){
    flex-direction: column;
}
`
export const FooterLinksItems = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 16px;
color: #fff;
text-align: left;
width: 160px;
/* box-sizing: border-box; */


@media screen and (max-width:420px){
    margin: 0;
    padding: 10px;
    width: 100%;
}
`

export const FooterLinkTitle = styled.h1`
font-size: 1.2rem;
color: #fff;
margin-bottom: 1rem;

`

export const FooterLink = styled(Link)`
color:#fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 15px;


&:hover{
    color: #01bf71;
    transition: 0.3s ease-in-out;
}
`

export const SocialMedia = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 40px;
`

export const SocialMediaWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const SocialLogoWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: #fff;
`
export const SocialLogo = styled.div`
color: #fff;
font-size: 16px;
padding-bottom: 10px;
`

export const WebsiteRights = styled.div`
color: #fff;
align-items: center;
text-align: center;
`