import React from 'react'
import { NavBarOption } from './NavBarOption'
import { FaListUl, FaUser, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import '../../style/sub-components/Navbar.css'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const NavBar = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(-2)
    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setSelected(1);
                break;
            case '/skills':
                setSelected(2);
                break;
            case '/education':
                setSelected(3);
                break;
            case '/career':
                setSelected(4);
                break;
            case '/projects':
                setSelected(5);
                break;
            default:
                setSelected(1);
        }
    }, [location.pathname, setSelected]);

    return (
        <nav className='nav-bar'>
            <NavBarOption index={0} link={'/'} text={'About Me'} icon={<FaUser />} isSelected={selected === 1} pressed={() => setSelected(1)} />
            <NavBarOption index={1} link={'/skills'} text={'Skills'} icon={<FaListUl />} isSelected={selected === 2} pressed={() => setSelected(2)} />
            <NavBarOption index={2} link={'/education'} text={'Education'} icon={<FaGraduationCap />} isSelected={selected === 3} pressed={() => setSelected(3)} />
            <NavBarOption index={3} link={'/career'} text={'Career'} icon={<FaBriefcase />} isSelected={selected === 4} pressed={() => setSelected(4)} />
            <NavBarOption index={-1} link={'/projects'} text={'Projects'} icon={<FaComputer/>} isSelected={selected === 5} pressed={() => setSelected(5)} />
        </nav>
    )
}