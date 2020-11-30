import React from "react"
import {Cite, Col, Cols, FooterLogo, FooterWrapper, SocialMedia, SocialMedias} from "./styles";
import FooterLogoImg from "../../assets/images/footerLogo.png"
import {ReactComponent as Facebook} from "../../assets/icons/facebook-f-brands.svg";
import {ReactComponent as Twitter} from "../../assets/icons/twitter-brands.svg";
import {ReactComponent as Instagram} from "../../assets/icons/instagram-brands.svg";
import {ReactComponent as LinkedIn} from "../../assets/icons/linkedin-in-brands.svg";

function Footer() {
    return (
        <>
        <FooterWrapper>
            <FooterLogo>
                <img src={FooterLogoImg} alt=""/>
            </FooterLogo>

            <Cols>
                <Col>
                    <h3>Headline</h3>
                    <p>Sample footer text</p>

                </Col>
                <Col>
                    <h3>Headline</h3>
                    <p>Sample footer text</p>

                </Col>
                <Col>
                    <h3>Headline</h3>
                    <p>Sample footer text</p>

                </Col>
            </Cols>
            <SocialMedias>
                <Facebook/>
                <Twitter/>
                <Instagram/>
                <LinkedIn/>
            </SocialMedias>

        </FooterWrapper>
            <Cite>
                <p>Template created by <b>Maraim Tukhtasunov</b></p>
            </Cite>
            </>
    )

}

export default Footer