function Container({ col, center, children }) {
  return (
    <div className={`w-full h-full flex ${col ? "flex-col" : "flex-row"} ${center ? "justify-center" : ""} p-4`}>
      {children}
    </div>
  )
}

export default Container;