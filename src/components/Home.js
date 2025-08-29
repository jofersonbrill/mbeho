
//Images

import Banner from "../assets/images/banner3.jpg";
import Services from "../assets/images/services-left.jpg";
import Services1 from "../assets/images/services-01.jpg";
import Services2 from "../assets/images/services-02.jpg";
import Services3 from "../assets/images/services-03.jpg";
import Services4 from "../assets/images/services-04.jpg";
import Pubcontact from "../assets/images/pubcontact.jpg";
import CongoD from "../assets/images/CongoD.png";
import logoC from "../assets/images/logoC.png";
import Pgeek from "../assets/images/pgeek.png";
import ARC from "../assets/images/ARC.png";
import Jm from "../assets/images/jm.png";
import PartenLeft from "../assets/images/partenleft.jpg";
import Bannerleft from "../assets/images/bannerleft.png";
import Teams  from "../assets/images/teams.jpg";
import Contact from "../assets/images/contact.jpg";

//font-awesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


export default function Home({ sections }){

    return (
       <div className="container">
            <section className="container__about" ref={sections.section1}>
                <img src={Banner} alt="banner" />
                <h1>MBEHO Consulting </h1>
                <p>la satisfaction de nos clients constitue le socle de notre engagement. 
                Nous accompagnons  <br/> nos clients  dans leurs projets technologiques à 
                travers un conseil stratégique, <br/> une expertise technique  pointue et un 
                accompagnement sur mesure.
                 </p>
               <div className="btn">
                 <button className="c-gold-button btn__left">En savoir plus</button>
                 <button className="c-gold-button btn__right">Notre equipe</button>
               </div>

            </section>

            <section className="container__services" ref={sections.section2}>
                <img src={Services} alt="services"/>
                <div className="service-description">
                    <br/> <br/>
                    <h3>Nos Services.</h3>
                    <br/> <br/>
                    <div className="service-description__group1">
                        <div className="service1">
                            <img src={Services1} alt="services1"/> <br/>
                            Système d'information
                        </div>
                        <div className="service2">
                            <img src={Services2} alt="service2"/> <br/>
                            Transformation digitale
                        </div>
                    </div>
                    <br/> <br/>
                    <div className="service-description__group2">
                        <div className="service3">
                            <img src={Services3} alt="services3" /> <br/>
                            Automatisation des processus
                        </div>
                        <div className="service4">
                            <img src={Services4} alt="Service4" /> <br/>
                            Ingénieurie IT
                        </div>
                    </div>
                </div>
            </section>

            <section className="container__pub-contact">
                    <img src={Pubcontact} alt="pubcontact"/>
                    <div className="pub">
                        <h3>Êtes-vous prêt à travailler et à évoluer avec nous ? <br/>
                     N'hésitez pas à nous contacter !</h3>
                    <div> <button className="c-gold-button btn-color">Contactez Nous</button></div>
                    </div>
            </section>
           
            <section className="container__partenaire" ref={sections.section3}>
            <img src={PartenLeft} alt="partenaire left" className="partenleft" />
                <div className="displaypart">
                        <h3>Nos Partenaires</h3>
                        <div className="partenaire-logo">
                            <div><img src={CongoD} alt="logo congo divers" /></div>
                            <div><img src={ARC} alt="logo congo divers" /></div>
                            <div><img src={Pgeek} alt="logo congo divers" /></div>
                            <div><img src={Jm} alt="logo congo divers" /></div>
                        </div>
                </div>
            </section>

            <section className="container__equipes" ref={sections.section4}>
                   <h3>Notre Equipe</h3> 
                   <div className="equipe-mbeho">
                    <div className="equipe-mbeho__arrow">
                        <div><FontAwesomeIcon icon={faAngleLeft} /></div>
                    </div>
                    <div className="equipe-mbeho__profil">
                        <img src={Teams} />
                        <p>
                            CEO <br/>
                            Freddy LOLA
                        </p>
                    </div>
                    <div className="equipe-mbeho__profil">
                        <img src={Teams} className="scale" />
                        <p>
                            CEO <br/>
                            Freddy LOLA
                        </p>
                    </div>
                    <div className="equipe-mbeho__profil">
                        <img src={Teams} />
                        <p>
                            CEO <br/>
                            Freddy LOLA
                        </p>
                    </div>
                    <div className="equipe-mbeho__arrow">
                        <div><FontAwesomeIcon icon={faAngleRight} /></div>
                    </div>
                   </div>
            </section>

            <section className="container__contact displaycontent" ref={sections.section5}>
                <img src={Contact} alt="contact image" />
                <div className="formcontact">
                    
                    <form method="post">
                        <h3>Contactez Nous</h3>
                        <input className="c-form-input" type="text" placeholder="votre prenom" required/>
                        <input className="c-form-input" type="text" placeholder="votre nom" required/>
                        <br/> <br/>
                        <input className="c-form-input" type="text" placeholder="votre email" required/>
                        <input className="c-form-input" type="text" placeholder="votre sujet" required/>
                        <br/> <br/>
                        <textarea className="c-form-textarea"></textarea>
                        <br></br>
                        <button className="c-gold-button btn-contact">Envoyer</button>

                         <div className="contact-info">
                            <div>
                                <FontAwesomeIcon icon={faPhone} /> 
                                +242 06 637 5257
                                </div>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} /> 
                                mbeho@gmail.com
                                </div>
                            <div>
                                <FontAwesomeIcon icon={faLocationDot} /> 
                                Av charle de Gaule, pointe-noire
                            </div>
                        </div>

                    </form>
                    
                </div>
            </section>

            <section className="container__footer"> 
                    <p>&copy; Copyright tout droit réservé MBEHO Consulting </p>
            </section>
        
          
       </div> 
    )

}