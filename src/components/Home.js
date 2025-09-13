
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
import Caneco from "../assets/images/caneco.jpg";
import Qualios from "../assets/images/qualios.jpg";

//font-awesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

//Navlink

import { NavLink } from "react-router-dom";

//Swal

import Swal from "sweetalert2";




export default function Home({ sections }){

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "87525267-b09e-40cc-b7c8-5d0917fc1b9e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Succès!",
        text: "Message envoyé avec succès !",
        icon: "success"
        });
    }
}

    return (
       <div className="container">
            <section className="container__about" ref={sections.section1}>
                <img src={Banner} alt="banner" />
                <h1> <br/>Transformer vos idées <br/> en réalité</h1>
                <p>Nous créons des solutions innovantes qui propulsent <br/> votre entreprise vers le succès. Expertise, créativité et résultat garantis 
                 </p>
               <div className="btn">
                 <button className="c-gold-button btn__left"><NavLink to="/about">Commencer maintenant <FontAwesomeIcon icon={faArrowRight} /> </NavLink></button>
                 <button className="c-gold-button btn__right">Notre equipe</button>
               </div>

            </section>

             <section className="container__equipes" ref={sections.section2}>
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


            <section className="container__services" ref={sections.section3}>

                <h1>Nos Service</h1>

                <p className="paragraph">
                    Une gamme complète de services digitaux pour accompagner votre croissance et <br/> maximiser votre impact en ligne.
                </p>

                <div className="service-group1">
                    <div className="service-group1__content">
                        <div className="img-service"> <img src={Services1} alt="services1"/> </div>
                        <h3>Transformation Digital</h3>
                       <p> Site Web moderne, rapides et optimisés <br/> pour tous les appareils. Technologies de <br/> pointe et design responsive.</p>
                    </div>
                    <div className="service-group1__content">
                        <div className="img-service"> <img src={Services2} alt="services1"/> </div>
                        <h3>Automatisation et Data Analyste</h3>
                        <p>Application IOS et Android native et <br/> hybride. intuitive et performante <br/> optimale.</p>
                    </div>
                    <div className="service-group1__content">
                        <div className="img-service"> <img src={Services3} alt="services1"/> </div>
                        <h3>Assistante Technique et Support IT</h3>
                        <p>Strategie SEO, compagnes publicitaires et <br/> présence sur les réseaux sociaux pour <br/> booster votre visibilité.</p>
                    </div>
                </div>
                <div className="service-group2">
                    <div className="service-group2__content">
                        <div className="img-service"> <img src={Services4} alt="services1"/> </div>
                        <h3>Ingénieurie des système d'information</h3>
                        <p>Amélioration de la vitesse et des <br/> performances de vos plateformes digitales <br/> existantes.</p>
                    </div>
                    <div className="service-group2__content">
                        <div className="img-service"> <img src={Services1} alt="services1"/> </div>
                        <h3>Gestion des projets informatique </h3>
                        <p>Protection Avancée, sauvegardes <br/> automatiques et maintenance continue de <br/> vos système.</p>
                    </div>
                    <div className="service-group2__content">
                        <div className="img-service"> <img src={Services2} alt="services1"/> </div>
                        <h3>Conseil Strategique</h3>
                        <p>Accompagnement personnalisé pour définir <br/> et implémenter votre stratagie digitale.</p>
                    </div>
                </div>

                <p className="paragraph"><button className="c-gold-button">Découvrir tous nos services <FontAwesomeIcon icon={faArrowRight} /> </button></p>
                {/*<img src={Services} alt="services"/>
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
                </div>*/}
            </section>

            <section className="container__pub-contact">
                    {/*<img src={Pubcontact} alt="pubcontact"/>*/}
                    <div className="pub">
                        <h3>Êtes-vous prêt à travailler et à évoluer avec nous ? <br/>
                     N'hésitez pas à nous contacter !</h3>
                    <div> <button className="c-gold-button btn-color">Contactez Nous <FontAwesomeIcon icon={faClock} /></button></div>
                    </div>
            </section>
           
            <section className="container__partenaire" ref={sections.section4}>
            <img src={PartenLeft} alt="partenaire left" className="partenleft" />
                <div className="displaypart">
                        <h3>Nos Partenaires</h3>
                        <div className="partenaire-logo">
                            <div className="part-descr"><img src={Caneco} alt="logo congo divers" /></div>
                            <div><img src={Qualios} alt="logo congo divers" /></div>
                            <div><img src={Pgeek} alt="logo congo divers" /></div>
                            <div><img src={Jm} alt="logo congo divers" /></div>
                        </div>
                </div>
            </section>

           
            <section className="container__contact displaycontent" ref={sections.section5}>
                {/*<img src={Contact} alt="contact image" />*/}
                <div className="formcontact">
                    
                    <form onSubmit={onSubmit} method="post">
                        <h3>Contactez Nous</h3>
                        <input className="c-form-input" name="prenom" type="text" placeholder="prenom" required/>
                        <input className="c-form-input" name="nom" type="text" placeholder="nom" required/>
                       
                        <input className="c-form-input" name="email" type="text" placeholder="email" required/>
                        <br/>
                       <p> sujet: </p>
                       
                        <select type="text" name="sujet" className="c-form-input" required>
                            <option value="">--Choisissez un sujet--</option>
                            <option value="Developpement web">Developpement web</option>
                            <option value="Big Data">Big Data</option>
                            <option value="Data Scientist">Data Scientist</option>
                            <option value="Support IT">Support IT</option>
                            <option value="Autre">Autre</option>
                        </select>
                        <br/>
                        <textarea type="text" className="c-form-textarea" placeholder="Decrivez votre projet en quelques mots..."></textarea>
                        
                        <button className="c-gold-button btn-contact">Envoyer <FontAwesomeIcon icon={faPaperPlane} /></button>

                         {/*<div className="contact-info">
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
                        </div>*/}

                    </form>
                    
                </div>
            </section>

            {/*<section className="container__footer"> 
                    <p>&copy; Copyright tout droit réservé MBEHO Consulting </p>
            </section>*/}
        
          
       </div> 
    )

}