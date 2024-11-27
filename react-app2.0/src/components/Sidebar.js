import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa6";
import { FaComputer, FaGraduationCap } from "react-icons/fa6";
import { FaMoon, FaSun } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { FaEnvelope, FaFilePdf } from "react-icons/fa6";
import { LinkNoColor } from "../ui/Link";


function SideBarIconText({ icon, text }) {
  return (
    <>
      <div className="w-2/5 text-2xl flex justify-center z-10">{icon}</div>
      <div className="w-3/5 z-10 text-left">{text}</div>
    </>
  )
}

function SideBarElementHeader({ children }) {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="flex flex-col justify-center">
      <div className="flex text-2xl justify-center space-x-3 mb-4">
        <h1 className="font-bold">
          {children}
        </h1>
        <div className="text-lg flex flex-col">
          <Button fullrounded={true} padding={false} title={"My CVS"} onClick={() => setOpen(!isOpen)}>
            {<FaFilePdf />}
          </Button>
        </div>
      </div>
      {
        isOpen ? (
          <div className="relative">
            <div className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg z-30 flex flex-col shadow-lg shadow-zinc-400/50  dark:shadow-zinc-900">
              <LinkNoColor href={"cvs/JoséCarvalho_PT.pdf"}><FaFilePdf /> <span>CV Português</span></LinkNoColor>
              <LinkNoColor href={"cvs/JoséCarvalho_EN.pdf"}><FaFilePdf /> <span>CV English</span></LinkNoColor>
            </div>
          </div>
        ) : null
      }
    </div>
  )
}

function SideBarElement({ text, icon, onClick, selected }) {
  return (
    <button className={"relative text-lg flex p-4 rounded-lg overflow-hidden group " + (selected ? "bg-red-500 shadow-md shadow-zinc-400/50 dark:shadow-zinc-900 text-white" : "")} onClick={onClick}>
      <SideBarIconText icon={icon} text={text} />
      <span className="absolute inset-0 bg-orange-500 dark:bg-orange-500 transform -translate-x-full group-hover:translate-x-0 duration-500 opacity-0 group-hover:opacity-100 group-hover:text-white"></span>
    </button>
  )
}

function SideBarLightDark({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };
  return (
    <Container col={false} center={true}>
      <Button onClick={toggleDarkMode} fullrounded={true} padding={true} title={darkMode ? "Light Mode" : "Dark Mode"}>
        {darkMode ? (<FaMoon />) : (<FaSun />)}
      </Button>
    </Container>
  )
}

function SideBarIconsBottom({ href, icon, message }) {
  return (
    <a target="blank" className="flex-grow duration-300 hover:scale-125 text-4xl flex justify-center" href={href} title={message}>
      {icon}
    </a>
  )
}

function SideBarSocial() {
  return (
    <div className="flex flex-row justify-around w-full p-4 flex-wrap">
      <SideBarIconsBottom href={"https://github.com/JoseBambora"} icon={<FaGithub />} message={"My GitHub"} />
      <SideBarIconsBottom href={"https://www.instagram.com/josebambora20/"} icon={<FaInstagram />} message={"My Instagram"} />
      <SideBarIconsBottom href={"https://www.linkedin.com/in/jose-m-carvalho"} icon={<FaLinkedin />} message={"My Linkedin"} />
      <SideBarIconsBottom href={"mailto:josecarvalho.ei@gmail.com"} icon={<FaEnvelope />} message={"Send me an email"} />
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
    <div className="mt-auto flex flex-col justify-center">
      {children}
    </div>
  )
}


function SideBarElements({ setPage, setHidden, page, darkMode, setDarkMode }) {
  const funAux = (page) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    setPage(page)
    setHidden(true)
  }
  return (
    <div className="fixed w-full md:w-1/5 h-screen md:bg-opacity-0 dark:md:bg-opacity-0 bg-zinc-500 dark:bg-zinc-500 bg-opacity-50 dark:bg-opacity-50 z-20">
      <Container col={false} center={false}>
        <div className="absolute top-6 right-0 md:hidden z-50">
          <Button onClick={setHidden} fullrounded={true} padding={true}><FaXmark /></Button>
        </div>
        <div className={"w-full h-full items-stretch bg-zinc-300 dark:bg-zinc-800 rounded-lg shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900 z-40 overflow-y-auto"}>
          <Container col={true} center={false}>
            <SideBarTop>
              <SideBarElementHeader>José Carvalho</SideBarElementHeader>
              <SideBarElement selected={page === 0} onClick={() => funAux(0)} text="About Me" icon={<FaUser />} />
              <SideBarElement selected={page === 1} onClick={() => funAux(1)} text="Career" icon={<FaBriefcase />} />
              <SideBarElement selected={page === 2} onClick={() => funAux(2)} text="Education" icon={<FaGraduationCap />} />
              <SideBarElement selected={page === 3} onClick={() => funAux(3)} text="Skills" icon={<FaListUl />} />
              <SideBarElement selected={page === 4} onClick={() => funAux(4)} text="Projects" icon={<FaComputer />} />
            </SideBarTop>
            <SideBarBottom>
              <SideBarLightDark darkMode={darkMode} setDarkMode={setDarkMode} />
              <SideBarSocial />
            </SideBarBottom>
          </Container>
        </div>
      </Container>
    </div>
  )
}

function BurgerButton({ changeHidden }) {
  return (
    <div className="fixed top-4 left-4 z-10">
      <Button onClick={changeHidden} fullrounded={true} padding={true}><FaBars /></Button>
    </div>
  )
}

function SideBar({ setPage, page }) {
  const [hidden, setHidden] = useState(window.innerWidth >= 768 ? false : true)
  const [darkMode, setDarkMode] = useState(false);
  const changeHidden = () => window.innerWidth >= 768 ? false : setHidden(!hidden)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setHidden(false)
      }
      else
        setHidden(true)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <aside className="w-full md:w-1/5">
      {hidden ? <BurgerButton changeHidden={changeHidden} /> : null}
      {hidden ? null : <SideBarElements setPage={setPage} setHidden={changeHidden} page={page} darkMode={darkMode} setDarkMode={setDarkMode} />}
    </aside >
  )
}

export default SideBar;
