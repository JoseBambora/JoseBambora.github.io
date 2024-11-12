import Container from "./Container";
import Link from '../ui/Link';
import { FaGithub } from 'react-icons/fa6';

export function SectionListElement({ children }) {
  return (
    <li className="flex space-x-3">
      {children}
    </li>)
}

export function SectionList({ children }) {
  return (
    <ul className='mt-3 space-y-3 w-full ml-7 z-0'>
      {children}
    </ul>
  )
}

export function SectionTitle({ title }) {
  return (<span className='font-semibold text-lg'>{title}</span>)
}

export function Section({ children }) {
  return (
    <section className='w-full flex flex-col space-x-3'>
      {children}
    </section>
  )
}

export function Sections({ children }) {
  return (
    <section className='w-full flex space-x-3'>
      {children}
    </section>
  )
}

export function LinkProject({ href, text }) {
  return (
    <Link href={href}>
      <div className='flex space-x-3'>
        <div className="text-2xl flex justify-center text-zinc-700 dark:text-white"><FaGithub /> </div>
        <p>{text}</p>
      </div>
    </Link>
  )
}

export function CardSideBySide({ children }) {
  return (
    <div className='flex flex-col md:flex-row md:space-x-3'>
      {children}
    </div>
  )
}

function Header({ title, label, extra }) {
  return title ? (
    <section className="w-full flex mb-3">
      <section className="flex flex-col">
        <h1 className="text-3xl font-bold">{title}</h1>
        <label className="text-sm font-semibold">{label}</label>
      </section>
      <section className="ml-auto">
        <h1 className="text-xl font-bold">{extra}</h1>
      </section>
    </section>
  ) : null
}

export function Card({ children, title, label, extra }) {
  return (
    <div className="w-full bg-zinc-300 dark:bg-zinc-800 rounded-lg shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900 mb-4 transition ease-in-out hover:scale-101 duration-500 z-0">
      <Container col={true} center={false} padding={true}>
        <Header title={title} label={label} extra={extra} />
        <section className="space-y-2">
          {children}
        </section>
      </Container>
    </div>
  )
}