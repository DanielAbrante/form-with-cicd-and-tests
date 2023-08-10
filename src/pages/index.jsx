// Nome, Senha, Idade, Comentário, Selecionar foto, radio, checkbox, button
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    async function getNames() {
      const data = await fetch("http://localhost:3000/names");
      const names = await data.json();

      setAuthors(names);
    }

    getNames();
  }, [])

  return (
    <main>
      <h1>Formulário</h1>

      <br />

      <h2>Autores</h2>
      <ul>
        {authors.map(author => <li key={Math.random}>{author}</li>)}
      </ul>

      <br />

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