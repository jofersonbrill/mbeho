import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {

    return(
        <footer className="footer-pages">
            <div className="footer-pages__content">
                <div className='description'>
                    <h3>MBEHO</h3>
                    <p>Transformons ensemble vos idées en <br/> soution digitales innovantes. <br/> expertise, créativité et résultat garantis <br /> depuis plus de 10 ans.</p>
                </div>
                <div>
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href='#'>Accueil</a></li>
                        <li><a href='#'>Equipes</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Partenaire</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Service</h3>
                    <ul>
                        <li><a href='#'>Developpement web</a></li>
                        <li><a href='#'>Developpement web</a></li>
                        <li><a href='#'>Developpement web</a></li>
                        <li><a href='#'>Developpement web</a></li>
                        <li><a href='#'>Developpement web</a></li>
                        <li><a href='#'>Developpement web</a></li>
                        <li><a href='#'>Developpement web</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faPhone} /> +242 06 637 5257</li>
                        <li><FontAwesomeIcon icon={faEnvelope} /> contact@mbeho.com</li>
                        <li><FontAwesomeIcon icon={faLocationDot} /> Av  charles degaule</li>
                    </ul>
                </div>
            </div>
            <div className="footer-pages__copyright">
                <div className="copy">&copy; 2025 MBEHO. Tou Droit réservé.</div>
                <div className="politique">
                    <ul>
                        <li><a href='#'>Politique de confidentialité</a></li>
                        <li><a href='#'>Condition d'utilisation</a></li>
                        <li><a href='#'>Mention légale</a></li>
                    </ul>
                </div>
            </div>
    </footer>
    )

}