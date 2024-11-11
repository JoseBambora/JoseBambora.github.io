function Container({ col, center, children, padding }) {
  return (
    <div className={`w-full h-full flex ${col ? "flex-col" : "flex-row"} ${center ? "justify-center items-center" : ""} ${padding ? "p-6" : "p-4"}`}>
      {children}
    </div>
  )
}

export default Container;