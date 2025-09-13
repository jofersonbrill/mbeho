import about_banner from "../assets/images/banner_about.jpg";
import pubcontact from "../assets/images/pubcontact.jpg";
import about from "../assets/images/abouts.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';

export default function About () {


    return (
       <div className="about">

           
            <section className="about__description">
                
                <div className="images">
                    <img src={about} />
                </div>
                <div className="contenu">
                    
                    <p>
                        <h1>A Propos de Nous</h1>
                        <br/> <br/>
                        Depuis plus de 10 ans, nous accompagnons les entreprises dans leur transformation digitale. Notre mission est de créer des solutions sur mesure qui génèrent des résultats concrets et durables pour nos clients.

Nous croyons que chaque projet est unique et mérite une approche personnalisée. Notre équipe multidisciplinaire combine créativité, expertise technique et vision stratégique pour dépasser vos attentes.
<br /> <br/>
Nous croyons que chaque projet est unique et mérite une approche personnalisée. Notre équipe multidisciplinaire combine créativité, expertise technique et vision stratégique pour dépasser vos attentes.
                    
                    </p>
                    <br /> <br />
                    <hr/>

                 
                </div>
            </section>

             <section className="about__work">
                <img src={pubcontact} />
                <h1>Nos Atouts</h1>
                <div className="work-step">
                    <div className="work-step__items">
                        <div></div>
                        <h4> Expertise Confirmé</h4>
                        <p>Plus de 10 ans d’expérience cumulée dans l’ingénierie des systèmes d’information et la gestion d’environnements métiers complexes.</p>
                    </div>
                    <div className="work-step__items">
                        <div></div>
                        <h4> Accompagnement</h4>
                        <p>Prise en charge complète des projets, de l’audit initial à la conception, en passant par le déploiement et la maintenance opérationnelle.</p>
                    </div>
                    <div className="work-step__items">
                         <div></div>
                        <h4> Responsabilité centralisée </h4>
                        <p>Un interlocuteur unique pour coordonner l’ensemble des actions, garantir la cohérence du projet et simplifier les échanges.</p>
                    </div>
                    <div className="work-step__items">
                          <div></div>
                        <h4> Flexibilité d’intervention </h4>
                        <p>Capacité à initier un projet depuis zéro ou à reprendre, corriger et optimiser des projets existants en respectant les objectifs métier.</p>
                    </div>
                     <div className="work-step__items">
                          <div></div>
                        <h4> Approche sur-mesure </h4>
                        <p>Des solutions personnalisées reposant sur des technologies robustes, reconnues et adaptées à la réalité opérationnelle de chaque client.</p>
                    </div>
                </div>
            </section>

            <section className="about__service">
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
            </section>




            
       </div>
    )
}