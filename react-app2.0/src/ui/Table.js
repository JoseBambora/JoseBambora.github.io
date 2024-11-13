import Container from "./Container"

function Thead({ content }) {
  return (
    <div className={`rounded-lg mb-3 overflow-hidden w-full flex bg-red-500 text-2xl font-bold text-white`}>
      {content.map((column, index) => (
        <Container center={true} key={index}>
          {column}
        </Container>
      ))}
    </div>
  )
}

function Tbody({ content }) {
  return (
    <div className="rounded-lg mb-3 overflow-hidden w-full text-lg">
      {content.map((row, index) => (
        <div key={index} className={`flex hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white ` + (index % 2 === 0 ? "bg-zinc-100 dark:bg-zinc-600" : "bg-zinc-200 dark:bg-zinc-700")}>
          {row.map((column, index) => (
            <Container center={false} key={index}>
              {column}
            </Container>
          ))}
        </div>
      ))}
    </div>
  )
}
export function Table({ header, body }) {
  return (
    <div className="w-full">
      <Thead content={header} />
      <Tbody content={body} />
    </div>
  )
}
