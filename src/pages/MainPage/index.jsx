import React from "react"
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
// import TrelloNavbar from "../../components/TrelloNavbar/styles"

function MainPage() {
    return(
        <div>
            <Navbar/>
            <Header/>
            <Section/>
            <Footer/>
            {/*<TrelloNavbar/>*/}
        </div>
    )

}

export default MainPage