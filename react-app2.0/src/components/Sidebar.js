import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa6";
import { FaComputer, FaGraduationCap } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";


function SideBarElement({ text, icon, setPage }) {
  return (
    <button className="relative text-lg flex p-4 rounded-lg overflow-hidden group" onClick={setPage}>
      <div className="w-1/5 text-2xl flex justify-center z-10">{icon}</div>
      <div className="w-4/5 z-10">{text}</div>
      <span className="absolute inset-0 bg-red-500 transform -translate-x-full group-hover:translate-x-0 duration-500 opacity-0 group-hover:opacity-100"></span>
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

function SideBar({ setPage }) {
  return (
    <aside className="p-4 h-full">
      <div className="w-full h-full flex flex-col items-stretch bg-zinc-300 dark:bg-zinc-800 rounded-lg p-4">
        <SideBarTop>
          <SideBarElement setPage={() => setPage(0)} text="About Me" icon={<FaUser />} />
          <SideBarElement setPage={() => setPage(1)} text="Career" icon={<FaBriefcase />} />
          <SideBarElement setPage={() => setPage(2)} text="Education" icon={<FaGraduationCap />} />
          <SideBarElement setPage={() => setPage(3)} text="Skills" icon={<FaListUl />} />
          <SideBarElement setPage={() => setPage(4)} text="Projects" icon={<FaComputer />} />
        </SideBarTop>
        <SideBarBottom>
          <SideBarLightDark />
          <SideBarContact />
        </SideBarBottom>
      </div>
    </aside>
  )
}

export default SideBar;
