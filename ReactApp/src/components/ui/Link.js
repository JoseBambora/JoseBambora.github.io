import '../../style/ui/Link.css'

export const MyLink = ({link, text, nocolor}) => nocolor ? <a className='my-link-no-color' href={link} target="_blank" rel="noreferrer">{text}</a> : <a className='my-link' href={link} target="_blank" rel="noreferrer">{text}</a>