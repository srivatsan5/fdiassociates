import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header"

describe("Header Component", () => {
  it("renders header with navigation items", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    expect(screen.getByText("FDI Associates")).toBeInTheDocument()
    expect(screen.getByText("Services")).toBeInTheDocument()
    expect(screen.getByText("Contact")).toBeInTheDocument()
  })

  it("renders mobile menu toggle button", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    const toggleButton = screen.getByLabelText("Toggle mobile menu")
    expect(toggleButton).toBeInTheDocument()
  })
})
