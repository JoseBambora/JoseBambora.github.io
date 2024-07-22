

import { NavBar } from "./NavBar";
import '../../style/sub-components/Header.css'
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import image from '../../Zé.jpg'
import { MyLink } from "../ui/Link";

export const Header = ({ selected, setSelected }) => (
    <header className="top-fix">
        <div className='header'>
            <div className='ImageContainer'>
                <img className='Image' src={image} alt='My face' />
            </div>
            <div className="header-main">
                <section>
                    <h1>José Carvalho</h1>
                    <h3>Software Engineer</h3>
                    <p><FaMapMarkerAlt /> Braga, Portugal</p>
                </section>
            </div>
            <div className="header-info">
                <section className="header-info-half-1">
                    <ul className="header-list">
                        <li><MyLink link={'https://www.linkedin.com/in/jose-m-carvalho'} text={<p><FaLinkedin color="white"/> Linkedin</p>}/></li>
                        <li><MyLink link={'https://github.com/JoseBambora'} text={<p><FaGithub color="white"/> GitHub</p>} /></li>
                        <li><MyLink link={'https://www.linkedin.com/in/jose-m-carvalho'} text={<p><FaInstagram color="white"/> Instagram</p>}/></li>
                    </ul>
                </section>
                <section className="header-info-half-2">
                    <ul className="header-list">
                        <li><FaPhone /> +351 969 598 852</li>
                        <li><FaEnvelope /> josecarvalho.ei@gmail.com </li>
                    </ul>
                </section>
            </div>
        </div>
        <NavBar selected={selected} setSelected={setSelected} />
    </header>
)