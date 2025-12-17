import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Hero from "../components/Hero"

describe("Hero Component", () => {
  it("renders main heading with exact FDI text", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>,
    )
    expect(screen.getByText(/Empowering Enterprise with/i)).toBeInTheDocument()
    expect(screen.getByText(/Oracle Fusion Data Intelligence/i)).toBeInTheDocument()
  })

  it("renders call-to-action buttons", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>,
    )
    expect(screen.getByText("Get Started")).toBeInTheDocument()
    expect(screen.getByText("Schedule a Demo")).toBeInTheDocument()
  })

  it("renders key benefits", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>,
    )
    expect(screen.getByText(/Free Out-of-Box FDI Implementation/i)).toBeInTheDocument()
    expect(screen.getByText(/24\/7 Expert Support/i)).toBeInTheDocument()
    expect(screen.getByText(/100\+ Successful Implementations/i)).toBeInTheDocument()
  })
})
