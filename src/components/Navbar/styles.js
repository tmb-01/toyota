import styled from "styled-components"

export const NavbarWrapper = styled.div`
width: 100%;
border-bottom: 2px solid black;

`;

export const NavbarContainer = styled.div`
width: 1140px;
display: flex;
justify-content: space-between;
margin: auto;
//align-items: center;
`;

export const Logo=styled.div`
width: 100px;
background-color: black;
padding: 5px;
img{
width: 100%;
}
`;

export const Navs=styled.div`
display: flex;
//align-items: center;
background-color: black;
padding: 0 20px;
`;

export const Nav=styled.p`
//background-color: white;
font-size: 18px;
font-weight: 700;
padding: 5px 15px;
color: white;
display: flex;
align-items: center;
position: relative;
cursor: pointer;
user-select: none;
&:after{
content: '';
position: absolute;
bottom: -2px;
left: 0;
width: 0;
height: 4px;
background-color: white;
transition-duration: 0.5s;
}
&:hover{
&:after{
width: 100%;
}
&:active{
opacity: 0.6;
}
}

`;




