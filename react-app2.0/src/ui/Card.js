import Container from "./Container";
import Link from '../ui/Link';
import { FaGithub } from 'react-icons/fa6';
import { LinkNoColor } from '../ui/Link'
import React from "react";

export function SectionListElement({ children }) {
  return (
    <li className="flex h-1/3 space-x-3">
      {children}
    </li>)
}

export function SectionList({ children }) {
  return (
    <ul className={`mt-3 max-h-full w-full md:ml-7 space-y-2`}>
      {children}
    </ul>
  )
}


export function SectionListHorizontalElement({ children }) {
  return (
    <section className="flex">
      {children}
    </section>)
}

export function SectionListHorizontal({ children }) {
  const itemsWithBullets = React.Children.toArray(children).flatMap((child, index, array) =>
    index < array.length - 1
      ? [child, <span key={index}>•</span>]
      : [child]
  );
  return (
    <div className={`mt-3 w-full space-x-3 z-0 flex flex-wrap`}>
      {itemsWithBullets}
    </div>
  )
}


export function SectionTitle({ title }) {
  return (<span className='font-semibold text-lg'>{title}</span>)
}

export function Section({ children }) {
  return (
    <section className='w-full flex flex-col md:space-x-3'>
      {children}
    </section>
  )
}

export function Sections({ children, col }) {
  const typeflex = col ? "md:flex-col md:space-y-3" : "md:flex-row md:space-x-3"
  return (
    <section className={`w-full flex flex-col space-y-3 ${typeflex} `}>
      {children}
    </section>
  )
}

export function LinkProject({ href, text, icon }) {
  return (
    <Link href={href}>
      <div className='flex space-x-3'>
        <div className="text-2xl flex justify-center text-zinc-700 dark:text-white">{icon ? icon : <FaGithub />}</div>
        <p>{text}</p>
      </div>
    </Link>
  )
}

export function LinkProjectHeader({ href, text, icon }) {
  return (
    <LinkNoColor href={href}>
      <div className='flex space-x-3 items-center'>
        <p>{text}</p>
        <div className="text-zinc-700 dark:text-white">{icon ? icon : <FaGithub />}</div>
      </div>
    </LinkNoColor>
  )
}

export function CardSideBySide({ children }) {
  return (
    <div className='flex flex-col md:flex-row md:space-x-3'>
      {children}
    </div>
  )
}

export function CardDescription({ children }) {
  return (
    <div className="flex flex-col space-y-3 rounded-lg">
      <label className="font-semibold">Description</label>
      {children}
    </div>
  )
}

function Header({ title, label, extra, image, link }) {
  return title ? (
    <section className="w-full flex mb-3 relative">
      <section className="flex flex-col">
        <h1 className="text-3xl font-bold flex">
          {link ? <LinkProjectHeader href={link} text={title} /> : title}
        </h1>
        <label className="text-sm font-semibold flex space-x-3">
          <span>{label}</span>
        </label>
      </section>
      <section className="ml-auto flex">
        <h1 className="text-lg font-bold">{extra}</h1>
      </section>
      {image ? <img className="absolute rounded-full hidden h-20 w-20 object-contain  md:block right-0" src={image} alt={image} /> : null}
    </section>
  ) : null
}

export function Card({ children, title, label, extra, image, link }) {
  return (
    <div className="w-full bg-zinc-300 dark:bg-zinc-800 rounded-lg shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900 mb-4 transition ease-in-out hover:scale-101 duration-500 z-0">
      <Container col={true} center={false} padding={true}>
        <Header title={title} label={label} extra={extra} image={image} link={link} />
        <section className="space-y-2 w-full">
          {children}
        </section>
      </Container>
    </div>
  )
}