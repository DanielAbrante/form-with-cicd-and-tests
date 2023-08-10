import { render, screen } from "@testing-library/react"
import App from "@/pages/_app"
import "@testing-library/jest-dom"

// Task - testar describe com e sem "concurrent" para medir performance ou velocidade
describe("App", () => {
  it("Should render App page", async () => {
    render(<App />)

    await screen.findByRole('heading')

    expect(screen.getByRole('heading')).toHaveTextContent('Formulário')
  })
})

