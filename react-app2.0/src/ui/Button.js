function Button({ onClick, children, fullrounded }) {
  const roundedClass = fullrounded ? "rounded-full" : "rounded-xl"
  return (
    <button onClick={onClick} className={`${roundedClass} p-4 hover:bg-red-500 bg-zinc-700 dark:bg-white dark:hover:bg-red-600 text-white dark:text-zinc-800 shadow-md shadow-zinc-400/50 dark:shadow-zinc-900`}>
      {children}
    </button>
  )
}

export default Button