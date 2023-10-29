import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'



export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0px 30px;
height: 800px;
position: relative;
z-index: 1;

/* ::before{
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background:  linear-gradient(100deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%)
                 linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
} */
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34 ;
`

export const HeroContent = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
min-width: 1100px;
padding: 8px 30px;
margin: 0px auto 200px;
color: #fff;
z-index: 5;
`

export const HeroH1 = styled.h1`
font-size: 48px ;
font-weight: 600;
padding-bottom: 10px;
color: #fff;


@media screen and (max-width: 768px){
    font-size: 28px;
}

@media screen and (max-width: 480px){
    font-size: 20px;
}
`

export const HeroH5 = styled.h5`
font-size: 25px ;
font-weight: 400;
padding-bottom: 5px;
color: #fff;

@media screen and (max-width: 768px){
    font-size: 18px;
}

@media screen and (max-width: 480px){
    font-size: 16px;
}
`

export const HeroP1 = styled.p`
font-size: 16px ;
color: #fff;

@media screen and (max-width: 768px){
    font-size: 12px;
}

@media screen and (max-width: 480px){
    font-size: 12px;
}
`

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
align-items: center;
justify-content: center;
`
export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`