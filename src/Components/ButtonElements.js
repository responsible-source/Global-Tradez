import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';


export const Button = styled(LinkS)`
border-radius: 30px;
color: ${({dark}) => (dark ? '#000' : '#010606')};
background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 24px')};
font-size:${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#010606' : '#01BF71'  )};
    color: ${({dark}) => (dark ? '#fff' : '#010606')};
}
`