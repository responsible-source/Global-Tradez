import React, { useState } from 'react'
import Video from '../../Video/Video.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroH5, HeroP1, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const Hero = () => {
    const[hover, Setishover] = useState(false)

    const OnHover = ()=>{
        Setishover(!hover)
    }
  return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} autoPlay muted loop type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>BINARY OPTIONS, CFDs & <br></br> FOREX TRADING MADE EASY</HeroH1>
                <HeroH5>The Simplest And Most Powerful Trading Platform</HeroH5>
                <HeroP1>Sign Up for a new account today and recieve 10% cashback on your <br></br>first deposit to  your trading account</HeroP1>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={OnHover}
                onMouseLeave={OnHover}
                primary='true'
                dark='true'
                >Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
                 </HeroBtnWrapper>
            </HeroContent> 
        </HeroContainer>
  ) 
}

export default Hero