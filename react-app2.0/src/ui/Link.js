function Link({ href, children }) {
  return (
    <a className="underline text-red-500 hover:text-orange-500" href={href} target="blank">
      {children}
    </a>)
}

export default Link;