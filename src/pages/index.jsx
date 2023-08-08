// Nome, Senha, Idade, Comentário, Selecionar foto, radio, checkbox, button
import Link from "next/link"

export default function App() {
  return (
    <main>
      <form>
        <p>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" />
        </p>
        <Link href='/home'>
          <button>Submit</button>
        </Link>
      </form>
    </main>
  )
}