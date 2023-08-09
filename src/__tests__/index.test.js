import { render, screen } from "@testing-library/react"
import App from "@/pages/_app"
import "@testing-library/jest-dom"

// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// import react-testing methods
import { render, fireEvent, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import Fetch from '../fetch'

// Task - testar describe com e sem "concurrente" para medir performance ou velocidade
describe("App", () => {
  it("Should render App page", async () => {
    render(<App />)

    await screen.findByRole('heading')

    expect(screen.getByRole('heading')).toHaveTextContent('Formulário')
  })
})

