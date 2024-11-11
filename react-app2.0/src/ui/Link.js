function Link({ href, children }) {
  return (
    <a className="underline w-full" href={href} target="blank">
      {children}
    </a>)
}

export default Link;