

import { NavBar } from "./NavBar";
import '../../style/sub-components/Header.css'
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFilePdf } from "react-icons/fa";
import image from '../../Zé.jpg'
import { MyLink } from "../ui/Link";
import { useState } from "react";

export const Header = () => {
    const [hidden, setHidden] = useState(true);
    const showHideCvs = () => {
        setHidden(!hidden)
    }

    return <header className="top-fix">
        <div className='header'>
            <div className='ImageContainer'>
                <img className='Image' src={image} alt='My face' />
            </div>
            <div className="header-main">
                <section className="header-main-top">
                    <h1>José Carvalho</h1>
                    <h3>Software Engineer</h3>
                    <h4><FaMapMarkerAlt /> Braga, Portugal</h4>
                </section>
            </div>
            <div className="header-info">
                <section className="header-info-half-1">
                    <ul className="header-list">
                        <li><MyLink link={'https://www.linkedin.com/in/jose-m-carvalho'} text={<p><FaLinkedin color="white" /> Linkedin</p>} /></li>
                        <li><MyLink link={'https://github.com/JoseBambora'} text={<p><FaGithub color="white" /> GitHub</p>} /></li>
                        <li><MyLink link={'https://www.instagram.com/josebambora20/'} text={<p><FaInstagram color="white" /> Instagram</p>} /></li>
                    </ul>
                </section>
                <section className="header-info-half-2">
                    <ul className="header-list">
                        <li>
                            <button className="cvs-button" onClick={showHideCvs}><FaFilePdf color="white" /> Show</button>
                            <div className={hidden ? 'cvs cvs-hidden' : 'cvs cvs-show'}>
                                <MyLink link={'/cvs/JoséCarvalho_EN.pdf'} text={<p><FaFilePdf color="white" /> English </p>} />
                                <MyLink link={'/cvs/JoséCarvalho_PT.pdf'} text={<p><FaFilePdf color="white" /> Portuguese</p>} />
                            </div>
                        </li>
                        <li><FaPhone /> +351 969 598 852</li>
                        <li><FaEnvelope /> josecarvalho.ei@gmail.com </li>
                    </ul>
                </section>
            </div>
        </div>
        <NavBar />
    </header>
}