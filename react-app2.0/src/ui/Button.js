function Button({ onClick, children, fullrounded, padding, title }) {
  const roundedClass = fullrounded ? "rounded-full" : "rounded-xl"
  const paddingClass = padding ? "p-4" : "p-2"
  return (
    <button onClick={onClick} className={`${roundedClass} ${paddingClass} hover:bg-orange-500 bg-red-500 dark:hover:bg-orange-500 text-white shadow-md shadow-zinc-400/50 dark:shadow-zinc-900 flex space-x-3`} title={title}>
      {children}
    </button>
  )
}

export default Button