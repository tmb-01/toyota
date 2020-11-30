import styled from "styled-components"
import SectionPicOne from "../../assets/images/6f5de08df6c1a4f14c65050e1ff59f2c.jpeg"
import SectionPicTwo from "../../assets/images/second-section-img.jpeg"

import imgDecoration from "../../assets/images/besideTitle.png"
import imgDecoration2 from "../../assets/images/besideTitle2.png"


export const SectionWrapper = styled.section`
width: 100%;
display: flex;
align-items: center;
padding-bottom: 50px;
`;

export const SectionImage = styled.div`
width: 60%;
height: 460px;
background-image: url(${props => props.img});
background-size: cover;
background-position: right ;
margin-top: 60px;
`;

export const SectionTextBox = styled.div`
width: 40%;
height: fit-content;
padding-top: 80px;
padding-right: 100px;
position: relative;
background-image: url(${imgDecoration});
background-size: 170px 186px;
background-position-x: -0px;
background-repeat: no-repeat;

`;

export const SectionTitle = styled.p`
font-size: 2.25rem;
font-weight: 400;
font-family: var(--title-font);
text-align: center;
z-index: 999;
`;

export const SectionText = styled.p`
width: 300px;
font-size: 20px;
line-height: 1.2;
font-weight: lighter;
font-style: italic;
font-family: Oswald;
margin: 50px 20px 0 auto;
`;

export const Button = styled.button`
color: white;
font-family: Oswald;
font-size: 16px;
padding: 10px  40px;
background-image: linear-gradient(to right, #84abec, #cf84fb);
border: 0;
border-radius: 40px;
margin: 50px auto 50px 0;
text-transform: uppercase;
text-space: 20px;
display: block;
&:focus{
outline: 0;
}
`;


export const SecondSectionImage = styled.div`
width: 65%;
height: 460px;
background-image: url(${props => props.img});
background-size: cover;
background-position: left ;
margin-top: 60px;
`;

export const SectionTwoTextBox = styled.div`
width: 35%;
padding: 20px 20px 0 100px;
position: relative;
`;

export const SectionTwoTextTitle = styled.div`
font-size: 2.25rem;
font-family: Oswald;
font-weight: bold;
margin-bottom: 45px;
line-height: 45px;
color: black;
z-index: 9;
;
`;

export const SectionTwoText = styled.div`
font-style: italic;
font-size: 17px;
font-family: 'Open Sans';
font-weight: 500;
`;

export const SecondButton = styled.button`
border: 0;
color: white;
background-color: black;
text-transform: uppercase;
padding: 10px 30px;
border-radius: 30px;
margin-top: 50px;
font-weight: bolder;
${props => props.second && "background-image: linear-gradient(to right, #35ced0, #84abec)"};


`;


export const BgImg = styled.div`
width: 190px;
height: 235px;
background-image: url(${imgDecoration2});
background-repeat: no-repeat;
background-size: 80%;
z-index: -9;
position: absolute;
top: -60px;
left: 45px;
`;


export const TextsWrapper = styled.div`
margin-left: 50px;
`;


export const SectionWrapperFour = styled.section`
width: 100%;
display: flex;
align-items: center;
padding-bottom: 50px;
`;

export const SectionImageFour = styled.div`
width: 60%;
height: 560px;
background-image: url(${props => props.img});
background-size: 1250px;
background-position: right ;
margin-top: 60px;
`;


export const SectionTextBoxFour = styled.div`
width: 40%;
height: fit-content;
padding-top: 80px;
padding-right: 100px;
position: relative;
//background-image: url(${imgDecoration});
background-size: 170px 186px;
background-position-x: -0px;
background-repeat: no-repeat;
font-family: var(--title-font);
margin: auto 0 -30px 0;
`;

export const SectionTitleFour = styled.p`
font-size: 2.25rem;
font-weight: 400;
font-family: var(--title-font);
text-align: left;
z-index: 999;
`;

export const SectionTextFour = styled.p`
width: 350px;
font-size: 18px;
//line-height: 1.2;
font-weight: 100;
font-style: italic;
font-family: Oswald;
margin: 50px 0 0 0;
`;

export const ButtonFour = styled.button`
color: white;
font-family: Oswald;
font-size: 16px;
padding: 10px  40px;
//background-image: linear-gradient(to right, #84abec, #cf84fb);
background-color: black;
border: 0;
border-radius: 40px;
margin: 50px auto 50px 0;
text-transform: uppercase;
text-space: 20px;

&:focus{
outline: 0;
}
`;


export const SectionWrapperWithoutPic = styled.section`
width: 100%;
background-image: linear-gradient(-90deg, #cf84fb, #35ced0);
display: flex;
`;

export const SectionCol = styled.div`
width: 50%;
display: flex;
align-items: center;
`;

export const SectionTextWOPic = styled.p`
padding: 100px 90px 100px 100px;
font-size: 1.30rem;
font-weight: 600;
line-height: 1.6;
color: white;

`;

export const SectionDev = styled.div`
width: 550px;
border-radius: 170px 0 0 170px;
background-color: white;
padding: 70px 0 20px 60px;
margin: 0 0 0 auto ;
p{
font-size: 3rem;
font-weight: 700;
line-height: 1.2;
font-family: Oswald;
}
`;

export const SectionImageLast = styled.div`
width: 60%;
height: 580px;
background-image: url(${props => props.img});
background-size: cover;
background-position: right ;
padding-top: 60px;
`;

export const SectionJoinUs = styled.section`

padding: 100px 170px 50px;
margin: auto;

background-image: url(${imgDecoration});
background-repeat: no-repeat;
background-size: 120px;
background-position: 120px 30px;

h1{
font-weight: 1000;
font-size: 2.25rem;
text-transform: uppercase;
font-family: Oswald;
margin-bottom: 20px;
}

p{
font-weight: 400;
line-height: 1.6;
font-size: 1rem;
}

`;

export const ImgsWrapper=styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
`;

export const ImgBox=styled.div`
width: 25%;
height: 300px;
background-image: url(${props=>props.img});
background-size: cover;
background-position: center;
`;