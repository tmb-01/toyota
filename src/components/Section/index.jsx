import React from "react"
import {
    BgImg,
    Button, ButtonFour, ImgBox, ImgsWrapper, SecondButton,
    SecondSectionImage, SectionCol, SectionDev,
    SectionImage, SectionImageFour, SectionImageLast, SectionJoinUs,
    SectionText,
    SectionTextBox, SectionTextBoxFour, SectionTextFour, SectionTextWOPic,
    SectionTitle, SectionTitleFour, SectionTwoText, SectionTwoTextBox, SectionTwoTextTitle,
    SectionWrapper, SectionWrapperFour, SectionWrapperWithoutPic, TextsWrapper
} from "./styles";
import SectionPicOne from "../../assets/images/6f5de08df6c1a4f14c65050e1ff59f2c.jpeg"

import SectionPicTwo from "../../assets/images/second-section-img.jpeg"
import SectionPicThree from "../../assets/images/third-img.jpeg"
import SectionPicFour from "../../assets/images/4c134e2df3106c5e28f93f94161e3242.png"
import SectionPicFive from "../../assets/images/lastBgImg.jpeg"

import Img1 from "../../assets/images/img1.jpeg"
import Img2 from "../../assets/images/img2.jpeg"
import Img3 from "../../assets/images/img3.jpeg"
import Img4 from "../../assets/images/img4.jpeg"
import Img5 from "../../assets/images/img5.jpeg"
import Img6 from "../../assets/images/img6.jpeg"
import Img7 from "../../assets/images/img7.jpeg"
import Img8 from "../../assets/images/img8.jpeg"


function Section() {
    return (
        <>
            <SectionWrapper>
                <SectionImage img={SectionPicOne}/>
                <SectionTextBox>
                    <SectionTitle>
                        The future has arrived.
                    </SectionTitle>
                    <SectionText>
                        While we can't predict the future, we can inspire it. So what will our cars look like and how
                        will
                        they function? Will we drive them or will they drive us? That seems to be the question on
                        everyone's
                        mind. Well, we have an idea. Cars are for people who want to go to more places safely and
                        efficiently
                        <br/>
                        <Button>Learn More</Button>
                    </SectionText>
                </SectionTextBox>
            </SectionWrapper>
            <SectionWrapper>
                <SectionTwoTextBox>
                    <SectionTwoTextTitle>
                        Less of a machine. <br/>
                        More of a pal.
                    </SectionTwoTextTitle>
                    <SectionTwoText>
                        Concept-i follows our belief that vehicles shouldn't start with technology—they should start,
                        and end, with the experience of the people who use them. Therefore, Concept-i was built from the
                        inside out, with a focus on making it immersive, energetic and, most importantly—approachable.
                    </SectionTwoText>
                    <SecondButton>
                        learn more
                    </SecondButton>

                </SectionTwoTextBox>

                <SecondSectionImage img={SectionPicTwo}/>


            </SectionWrapper>
            <SectionWrapper>
                <SectionTwoTextBox>
                    <BgImg/>
                    <SectionTwoTextTitle>
                        Neue Toyota Concept <br/>
                        Cars in Tokio

                    </SectionTwoTextTitle>
                    <TextsWrapper>
                        <SectionTwoText>
                            At the 2016 Consumer Electronics Show (CES) in Las Vegas, Toyota is demo’ing it’s idea of
                            the
                            “Future of Mobility”. As has become plainly obvious over the last couple years, Toyota
                            believes
                            plug-in vehicles will fail and that fuel cell EV’s are the future. While other companies are
                            at
                            CES showing off battery based EV’s, Toyota is sticking with their fuel cells.
                        </SectionTwoText>
                        <SecondButton second>
                            learn more
                        </SecondButton>
                    </TextsWrapper>
                </SectionTwoTextBox>

                <SecondSectionImage img={SectionPicThree}/>


            </SectionWrapper>
            <SectionWrapperFour>
                <SectionImageFour img={SectionPicFour}/>

                <SectionTextBoxFour>
                    <SectionTitleFour>
                        Concept-i looks as <br/> brilliant
                    </SectionTitleFour>
                    <SectionTextFour>
                        Its minimal yet artful interior is designed to help support its user experience. Lines flow from
                        the center of the dashboard throughout the vehicle, while Yui travels around them, using light,
                        sound and even touch to communicate critical information. It utilizes a single wide-screen, 3-D,
                        full-color Head-Up Display that blends into an interior that is clean and uncluttered.
                        <ButtonFour>Learn More</ButtonFour>
                    </SectionTextFour>
                </SectionTextBoxFour>

            </SectionWrapperFour>

            <SectionWrapperWithoutPic>
                <SectionCol>
                    <SectionTextWOPic>
                        In the future, we envision you, Yui and the car working together—like teammates. Now, here comes
                        the really fun part. Thanks to the car's advanced automated driving technologies, people with
                        all levels of ability can enjoy the ride. You're still in charge of the car. However, through
                        biometric sensors throughout the car, Concept-i can detect what you're feeling. That information
                        then gets analyzed by the car's AI. That's when the automated features kick in.
                    </SectionTextWOPic>

                </SectionCol>
                <SectionCol>
                    <SectionDev>
                        <p>
                            Concept-i puts the <br/>
                            “i” in team.
                        </p>
                        <ButtonFour>learn more</ButtonFour>
                    </SectionDev>

                </SectionCol>
            </SectionWrapperWithoutPic>

            <SectionWrapper>
                <SectionImageLast img={SectionPicFive}/>
                <SectionTextBox>
                    <SectionTitle>
                        Join us in the future.
                    </SectionTitle>
                    <SectionText>
                        Check out the recent unveiling of Toyota Concept-i at CES 2017. And if you want even more info,
                        check out our recent press release.
                        <br/>
                        <Button>Join now</Button>
                    </SectionText>
                </SectionTextBox>
            </SectionWrapper>

            <SectionJoinUs>
                <h1>Join us in the future.</h1>

                <p>
                    Our vision for the car of the future starts with "Yui." <br/>
                    Designed from the inside out, Toyota Concept-i is an exciting glimpse into a future mobility <br/>
                    that is warm, friendly and revolves around you.
                </p>

            </SectionJoinUs>
            <ImgsWrapper>
                <ImgBox img={Img1}/>
                <ImgBox img={Img2}/>
                <ImgBox img={Img3}/>
                <ImgBox img={Img4}/>
                <ImgBox img={Img5}/>
                <ImgBox img={Img6}/>
                <ImgBox img={Img7}/>
                <ImgBox img={Img8}/>
            </ImgsWrapper>

        </>
    )
}

export default Section