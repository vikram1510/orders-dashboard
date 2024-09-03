import { render, screen, fireEvent } from "@testing-library/react"
import Dashboard from "./Dashboard"
import * as useFetchOrdersHook from "./hooks/useFetchOrders"
import { orders } from "./mocks/orders"

jest.mock("./hooks/useFetchOrders")

describe("Dashboard", () => {
  it("should show sellers rankings if request succeeds", () => {
    jest.spyOn(useFetchOrdersHook, "useFetchOrders").mockReturnValue({
      error: null,
      loading: false,
      orders: orders,
      refetch: jest.fn(),
    })
    render(<Dashboard />)
    expect(screen.getByText("Seller Rankings")).toBeInTheDocument()
    expect(screen.getByText("Seller C")).toBeInTheDocument()
  })

  it("should show error message if request fails", () => {
    jest.spyOn(useFetchOrdersHook, "useFetchOrders").mockReturnValue({
      error: "Error",
      loading: false,
      orders: null,
      refetch: jest.fn(),
    })
    render(<Dashboard />)
    expect(screen.getByTestId("error-container")).toBeInTheDocument()
  })

  it("should call refetch if retry button is clicked", () => {
    const mockRefetch = jest.fn()
    jest.spyOn(useFetchOrdersHook, "useFetchOrders").mockReturnValue({
      error: "Error",
      loading: false,
      orders: null,
      refetch: mockRefetch,
    })
    render(<Dashboard />)
    fireEvent.click(screen.getByText("Retry"))
    expect(mockRefetch).toBeCalled()
  })
})
