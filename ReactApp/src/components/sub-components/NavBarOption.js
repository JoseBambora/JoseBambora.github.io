import { useNavigate } from 'react-router-dom';
import '../../style/sub-components/NavBarOption.css'

export const NavBarOption = ({ link, text, icon, isSelected, pressed, index }) => {
    const classNameAux = isSelected ? 'nav-bar-option nav-bar-option-selected' : 'nav-bar-option'
    const className = index === 0 ? classNameAux + " nav-bar-option-fst" : index === -1 ? classNameAux + " nav-bar-option-lst": classNameAux
    const navigate = useNavigate();
    const handleClick = () => {
        pressed();
        navigate(link);
    };
    return (
        <button className={className} onClick={handleClick}>
            <p>{icon} <b>{text}</b></p>
        </button>
    )
}

