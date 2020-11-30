import React from "react"
import {Logo, Nav, NavbarContainer, NavbarWrapper, Navs} from "./styles";
import LogoImg from "../../assets/images/logo.jpeg"

function Navbar() {

    return(
        <NavbarWrapper>
            <NavbarContainer>
                <Logo>
                    <img src={LogoImg} alt=""/>
                </Logo>

                <Navs>
                    <Nav>
                        Home
                    </Nav>
                    <Nav>
                        Cars
                    </Nav>
                    <Nav>
                        About Us
                    </Nav>
                    <Nav>
                        Order your car
                    </Nav>
                </Navs>
            </NavbarContainer>
        </NavbarWrapper>
    )

}

export default Navbar