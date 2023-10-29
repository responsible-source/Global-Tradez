import React from 'react';
import Image from '../../Images/Online-chat-support.svg'
import Image1 from '../../Images/Secured-profits.svg'
import Image2 from '../../Images/Autobot.svg'
import Image3 from '../../Images/Bitcoin-p2p.svg'
import Image4 from '../../Images/world-updates.svg'
import Image5 from '../../Images/Seamless-Transfers.svg'
import { ServiceContainer, ServicesH1, ServiceCardWrapper, ServiceCard, Img, ServicesH2, ServiceCardText } from './ServiceElements';

const Service = () => {
  return (
    <div>
        <ServiceContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServiceCardWrapper>
                <ServiceCard>
                    <Img src={Image5} />
                    <ServicesH2>Easy Withdrawals</ServicesH2>
                    <ServiceCardText>Enjoy Seamless and fast Withdrawals from your Globaltradez account to your domestic banking app</ServiceCardText>
                </ServiceCard>
                
                <ServiceCard>
                    <Img src={Image1} />
                    <ServicesH2>Maximum Security</ServicesH2>
                    <ServiceCardText>Gobaltradez offers one of the most secure way of trading, and the sweet part is, we take the risk for you.</ServiceCardText>
                </ServiceCard>

                <ServiceCard>
                    <Img src={Image2} />
                    <ServicesH2>Auto Trading Bots</ServicesH2>
                    <ServiceCardText>Automated Premium Softwares to guarantee trading profits.</ServiceCardText>
                </ServiceCard>

                <ServiceCard>
                    <Img src={Image3} />
                    <ServicesH2> Crypto Wallet</ServicesH2>
                    <ServiceCardText>Global Tradez provides safe and well secured crypto wallet.</ServiceCardText>
                </ServiceCard>

                <ServiceCard>
                    <Img src={Image4} />
                    <ServicesH2>Updates on the go</ServicesH2>
                    <ServiceCardText>Globaltradez always keep you updated in all the trending markets in the industry</ServiceCardText>
                </ServiceCard>

                <ServiceCard>
                    <Img src={Image} />
                    <ServicesH2>Chat Support System</ServicesH2>
                    <ServiceCardText>A 24/7 chat support system to serve your needs any time of the day.</ServiceCardText>
                </ServiceCard>
            </ServiceCardWrapper>
        </ServiceContainer>
    </div>
  )
}

export default Service