import Container from "./Container";

function Card({ children, title, label, extra }) {
  return (
    <div className="w-full bg-zinc-300 dark:bg-zinc-800 rounded-lg shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900 mb-4 transition ease-in-out hover:scale-101 duration-300">
      <Container col={true} center={false}>
        <section className="w-full flex mb-3">
          <section className="flex flex-col">
            <h1 className="text-3xl font-bold">{title}</h1>
            <label className="text-sm font-semibold">{label}</label>
          </section>
          <section className="ml-auto">
            <h1 className="text-xl font-bold">{extra}</h1>
          </section>
        </section>
        <section className="space-y-2">
          {children}
        </section>
      </Container>
    </div>
  )
}

export default Card;