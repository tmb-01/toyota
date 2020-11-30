import React from "react"
import CarImgHeader from "../../assets/images/toyota-header.PNG"
import {HeaderContainer, HeaderText, HeaderTextWrapper, HeaderTitle} from "./styles";

function Header() {
    return (
        <HeaderContainer>
            <img src={CarImgHeader} alt=""/>
            <HeaderTextWrapper>
                <HeaderTitle>Toyota Concept-i Series</HeaderTitle>
                <HeaderText>
                    Toyota Concept-i and its forward-thinking UX hold a mirror up to a future that is warm, friendly,
                    engaging and, most of all—fun. Without further ado, meet Concept-i.
                </HeaderText>
            </HeaderTextWrapper>
        </HeaderContainer>
    )

}

export default Header