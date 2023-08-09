// Nome, Senha, Idade, Comentário, Selecionar foto, radio, checkbox, button
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Formulário</h1>
      <form>
        <p>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" value="Daniel" />
        </p>
        <Link href='/home'>
          <button>Submit</button>
        </Link>
      </form>
    </main>
  )
}