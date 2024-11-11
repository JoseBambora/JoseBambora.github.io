function Button({ onClick, children, fullrounded }) {
  const roundedClass = fullrounded ? "rounded-full" : "rounded-xl"
  return (
    <button onClick={onClick} className={`${roundedClass} p-4 hover:bg-orange-500 bg-red-500 dark:hover:bg-orange-500 text-white shadow-md shadow-zinc-400/50 dark:shadow-zinc-900`}>
      {children}
    </button>
  )
}

export default Button