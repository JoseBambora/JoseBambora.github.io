import Container from "./Container";
import Link from '../ui/Link';
import { FaGithub } from 'react-icons/fa6';

export function Topic({ title, content }) {
  return (
    <section className='w-full'>
      <span className='font-semibold text-lg'>{title}</span>
      <ul className='mt-3 space-y-2 w-full ml-7 z-0'>
        {content.map((t, index) => (
          <li key={index}>
            {t}
          </li>))}
      </ul>
    </section>
  )
}

export function Sections({ topics, projects }) {
  return (
    <div className='grid grid-cols-2 w-11/12'>
      <Topic title={"Topics"} content={topics} />
      <Topic title={"Projects"} content={projects} />
    </div>
  )
}

export function LinkProject({ href, text }) {
  return (
    <Link href={href}>
      <div className='flex space-x-2'>
        <div className="text-2xl flex justify-center text-zinc-700 dark:text-white"><FaGithub /> </div>
        <p>{text}</p>
      </div>
    </Link>
  )
}

export function Card({ children, title, label, extra }) {
  return (
    <div className="w-full bg-zinc-300 dark:bg-zinc-800 rounded-lg shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900 mb-4 transition ease-in-out hover:scale-101 duration-300 z-0">
      <Container col={true} center={false} padding={true}>
        <section className="w-full flex mb-3">
          <section className="flex flex-col">
            <h1 className="text-3xl font-bold">{title}</h1>
            <label className="text-sm font-semibold">{label}</label>
          </section>
          <section className="ml-auto">
            <h1 className="text-xl font-bold">{extra}</h1>
          </section>
        </section>
        <section className="space-y-2">
          {children}
        </section>
      </Container>
    </div>
  )
}