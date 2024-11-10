import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa6";
import { FaComputer, FaGraduationCap } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import Button from "../ui/Button";




function SideBarElement({ text, icon, onClick, selected }) {
  return (
    <button className={"relative text-lg flex p-4 rounded-lg overflow-hidden group " + (selected ? "bg-orange-500 shadow-md shadow-zinc-400/50 dark:shadow-zinc-900 text-white" : "")} onClick={onClick}>
      <div className="w-1/5 text-2xl flex justify-center z-10">{icon}</div>
      <div className="w-4/5 z-10">{text}</div>
      <span className="absolute inset-0 bg-red-500 dark:bg-red-600 transform -translate-x-full group-hover:translate-x-0 duration-500 opacity-0 group-hover:opacity-100 group-hover:text-white"></span>
    </button>
  )
}

function SideBarLightDark() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };
  return (
    <div className="p-4 flex justify-center">
      <button className="text-2xl" onClick={toggleDarkMode} ><FaMoon /></button>
    </div>
  )
}

function SideBarContact() {
  return (
    <div className="flex justify-around w-full rounded-lg p-4">
      <a target="blank" href="https://github.com/JoseBambora" className="flex-grow text-4xl flex justify-center"><FaGithub /></a>
      <a target="blank" href="https://www.instagram.com/josebambora20/" className="flex-grow text-4xl flex justify-center"><FaInstagram /></a>
      <a target="blank" href="https://www.linkedin.com/in/jose-m-carvalho" className="flex-grow text-4xl flex justify-center"><FaLinkedin /></a>
    </div>
  )
}

function SideBarTop({ children }) {
  return (
    <div className="flex flex-col mt-8 space-y-6">
      {children}
    </div>
  )
}

function SideBarBottom({ children }) {
  return (
    <div className="mt-auto flex flex-col">
      {children}
    </div>
  )
}

function SideBarElements({ setPage, setHidden, page }) {
  return (
    <div className="w-full h-screen p-4 fixed md:static md:bg-opacity-0 dark:md:bg-opacity-0 bg-zinc-500 dark:bg-zinc-500 bg-opacity-50 dark:bg-opacity-50">
      <div className="absolute top-6 right-0 md:hidden z-10">
        <Button onClick={setHidden} fullrounded={true}><FaXmark /></Button>
      </div>
      <div className={"w-full h-full flex flex-col items-stretch bg-zinc-300 dark:bg-zinc-800 rounded-lg p-4 shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900"}>
        <SideBarTop>
          <SideBarElement selected={page === 0} onClick={() => { setPage(0); setHidden(true) }} text="About Me" icon={<FaUser />} />
          <SideBarElement selected={page === 1} onClick={() => { setPage(1); setHidden(true) }} text="Career" icon={<FaBriefcase />} />
          <SideBarElement selected={page === 2} onClick={() => { setPage(2); setHidden(true) }} text="Education" icon={<FaGraduationCap />} />
          <SideBarElement selected={page === 3} onClick={() => { setPage(3); setHidden(true) }} text="Skills" icon={<FaListUl />} />
          <SideBarElement selected={page === 4} onClick={() => { setPage(4); setHidden(true) }} text="Projects" icon={<FaComputer />} />
        </SideBarTop>
        <SideBarBottom>
          <SideBarLightDark />
          <SideBarContact />
        </SideBarBottom>
      </div>
    </div>
  )
}

function BurgetButton({ changeHidden }) {
  return (
    <div className="fixed top-1 left-1">
      <Button onClick={changeHidden} fullrounded={true}><FaBars /></Button>
    </div>
  )
}

function SideBar({ setPage, page }) {
  const [hidden, setHidden] = useState(window.innerWidth >= 768 ? false : true)
  const changeHidden = () => window.innerWidth >= 768 ? false : setHidden(!hidden)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setHidden(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <aside className="w-full md:w-1/5">
      {hidden ? <BurgetButton changeHidden={changeHidden} /> : null}
      {hidden ? null : <SideBarElements setPage={setPage} setHidden={changeHidden} page={page} />}
    </aside >
  )
}

export default SideBar;
