import { describe, it, expect, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import ContactForm from "../components/ContactForm"

describe("ContactForm Component", () => {
  beforeEach(() => {
    render(<ContactForm />)
  })

  it("renders all form fields with correct labels", () => {
    expect(screen.getByLabelText(/^Name$/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email Address/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Company Name/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/)).toBeInTheDocument()
  })

  it("requires email field", () => {
    const emailInput = screen.getByPlaceholderText("your@email.com") as HTMLInputElement
    expect(emailInput.required).toBe(true)
  })

  it("requires message field", () => {
    const messageInput = screen.getByPlaceholderText("Your message here...") as HTMLTextAreaElement
    expect(messageInput.required).toBe(true)
  })

  it("renders submit button with correct text", () => {
    expect(screen.getByRole("button", { name: /Submit/ })).toBeInTheDocument()
  })
})
