import {useEffect, useState} from 'react';
import { gsap } from "gsap/gsap-core";
import { ScrollToPlugin } from "gsap/all";


export default function ScrollY(){

    const [backToTopBottom, setToTopBottom] = useState(false);

        useEffect(()=>{
            window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                setToTopBottom(true)
            }else{
                setToTopBottom(false)
            }
            })
        }, [])

        const scrollUp = () => {
            window.scrollTo({
            top:0,
            behavior: "smooth"
            })
        }

        return (
            <div>
            {backToTopBottom && (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <p 

              style={{
                 position: "fixed",
                bottom: "40px",
                right: "40px",
                padding: "10px 15px",
                fontSize: "16px",
                background: "black",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                zIndex: "1000",
                opacity: "0",
                visibility: "hidden",
                transform: "scale(0.8)",
                border: "1px solid red",
                display:"block"
              }}
              
              ><a onClick={scrollUp} ><i className="fa-solid fa-circle-chevron-up"></i>test</a></p>
            )}
          </div>
        )

}


