import logo from "../assets/logo/logo2.png";

import { gsap } from "gsap/gsap-core";

import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar( {sections} ){
        
    const scrollToSection = (ref) => {
        gsap.to(window, {
            duration:1,
            scrollTo: ref.current,
            ease: "power2.inOut"
        })
    }


    return (


        <header className="home-header">
            <nav className="home-header__nav navbar">
                <div className="navbar__logo"><img src={logo} alt="logo" width="150px" height="150px"/></div>
                <div className="navbar__menu">
                    <ul>
                        <li onClick={() => {scrollToSection(sections.section1)}}>home</li>
                        <li onClick={() => {scrollToSection(sections.section2)}}>services</li>
                        <li onClick={() => {scrollToSection(sections.section3)}}>Partenaires</li>
                        <li onClick={() => {scrollToSection(sections.section4)}}>Notre Equipe</li>
                        <li onClick={() => {scrollToSection(sections.section5)}}>Contact</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}