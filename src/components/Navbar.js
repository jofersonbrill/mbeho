import logo from "../assets/logo/logo1.png";

import { gsap } from "gsap/gsap-core";

import { ScrollToPlugin } from "gsap/all";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faK } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar( {sections} ){

        
    const scrollToSection = (ref) => {

        if(ref.current){
            gsap.to(window, {
            duration:1,
            scrollTo: ref.current,
            ease: "power2.inOut"
        })
        }else{
            console.warn("element introuvable" , ref.current)
        }

       /*console.log( document.querySelector('.liste::after').style.content="")
       console.log( document.querySelector('.liste::after').style.display="block")*/
      


        /*const box = document.querySelector('.container__about').offsetHeight;
        var height = document.querySelector('.home-header').offsetHeight;

        setTimeout(() => {
                    input[type="checkbox"]:not(:checked) ~ .liste
                  document.querySelector('#check:checked ~ .liste').style.opacity = "-100%";
            }, 1000)*/

        
       /* if(scroll >= box - height){
            console.log('success');
              document.querySelector('.liste').style.opacity = "1";
        }else{
           console.log( 'no success');
            document.querySelector('.liste').style.opacity = "0";
            setTimeout(() => {
                location.reload()
            })
        } */

    }


    return (


        <header className="home-header">
            <nav className="home-header__nav navbar">
                <div className="navbar__logo"><img src={logo} alt="logo" width="150px" height="150px"/></div>
                <div className="navbar__menu">

                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="voir-menu">< FontAwesomeIcon icon={faBars} /></label>

                    <ul className={"liste"}>

                        <NavLink to="/"><li onClick={()  => {scrollToSection(sections.section1)}}>ACCUEIL</li></NavLink>
                        <NavLink to="/"><li onClick={() => {scrollToSection(sections.section2)}}>EQUIPE</li></NavLink>
                        <NavLink to="/"><li onClick={() => {scrollToSection(sections.section3)}}>SERVICES</li></NavLink>
                        <NavLink to="/"><li onClick={() => {scrollToSection(sections.section4)}}>PARTENAIRES</li></NavLink>
                        <NavLink to="/"><li onClick={() => {scrollToSection(sections.section5)}}>CONTACT</li></NavLink>

                         <label htmlFor="check" className="cacher-menu"><FontAwesomeIcon icon={faXmark} /></label>
                    </ul>
                   
                </div>
            </nav>
        </header>
    )
}