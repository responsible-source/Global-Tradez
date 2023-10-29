import React from 'react'
import { Button } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img } from './InfoElements'

const Info = ({LightBg, id, imgStart, topLine, LightText, HeadLine, darkText, Description, buttonLabel, img, alt}) => {
  return (
    <InfoContainer LightBg={LightBg} id={id}>
        <InfoWrapper>
            <InfoRow ImgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading LightText={LightText}>{HeadLine} </Heading>
                    <Subtitle darkText={darkText}>{Description}</Subtitle>
                    <BtnWrap>
                        <Button to='/home'
                        primary='true'
                        dark='true'>{buttonLabel}</Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Img src={img} alt={alt} />
                </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>

  )
}

export default Info