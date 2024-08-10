import "@testing-library/jest-dom"
import React from "react"
import { render } from "@testing-library/react"
import { createContext, useContext } from "../src/index"

describe("createContext", () => {
  it("should create a context with default value", () => {
    const defaultValue = "test"
    const TestContext = createContext(defaultValue)
    expect(TestContext).toHaveProperty("Provider")
    expect(TestContext).toHaveProperty("Consumer")
    expect(TestContext._currentValue).toBe(defaultValue)
  })
})

describe("useContext", () => {
  it("should return context value", () => {
    const TestContext = createContext("test")
    const TestComponent = () => {
      const value = useContext(TestContext, "TestComponent")
      expect(value).toBe("test")
      return <div>{value}</div>
    }

    const { getByText } = render(
      <TestContext.Provider value="test">
        <TestComponent />
      </TestContext.Provider>
    )

    expect(getByText("test")).toBeInTheDocument()
  })

  it("should throw error if context is not provided", () => {
    const TestContext = createContext<string | undefined>(undefined)
    const TestComponent = () => {
      expect(() => useContext(TestContext, "TestComponent")).toThrow(
        "TestComponent components cannot be rendered outside the TestContext"
      )
      return <div />
    }

    expect(() => render(<TestComponent />)).toThrow()
  })
})
