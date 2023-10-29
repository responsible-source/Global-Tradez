import styled from 'styled-components';


export const ServiceContainer = styled.div`
background: #010606;
height: 1300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


@media screen and (max-width:768px){
    height: 1800px;
}

@media screen and (max-width:448px){
    height: 2800px;
}
`

export const ServicesH1 = styled.h1`
margin-top: 10px;
text-align: center;
justify-content: center;
font-size: 50px;
font-weight: 600;
color: #fff;
padding-bottom: 50px;
overflow: hidden;
`

export const ServiceCardWrapper = styled.div`
max-width: 1100px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
align-items: center;
padding: 0 50px;
overflow: hidden;

@media screen and (max-width:1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width:468px){
    grid-template-columns: 1fr;
}
`

export const ServiceCard = styled.div`
display: grid;
justify-content: center;
align-items: center;
text-align: center;
margin-right: 20px;
margin-top: 20px;
border-radius: 10px;
height:350px;
background: #fff;
color: #000;
padding: 0 50px ;
box-shadow: 0 1px 3px rgba(0,0,0,0.6);
transition: all 0.2s ease-in-out;
z-index: 1;

&:hover{
    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

@media screen and (max-width:768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 10px;
}
`

export const Img = styled.img`
height: 160px;
width: 160px;
margin: 0 10px;
padding: 20px 0px ;
`

export const ServicesH2 = styled.h2`
color: #000;
font-size: 1.5rem;
padding-bottom: 30px;

`

export const ServiceCardText = styled.p`
color: #000;
font-size: 1rem;
text-align: center;
margin-bottom: 30px;
line-height: 1.5rem;
overflow: hidden;
`