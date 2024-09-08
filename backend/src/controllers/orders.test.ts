import { create, remove } from "./orders"
import { Request, Response } from "express"
import { orderSchema } from "./orderSchema"
import { ZodError } from "zod"

describe("create", () => {
  it("should create a new order successfully", () => {
    const req = {
      body: {
        sellerName: "Alice",
        revenue: 400,
        status: "Confirmed",
      },
    }
    const res: Partial<Response> = {
      json: jest.fn(),
    }

    const schemaMock = jest.spyOn(orderSchema, "safeParse").mockReturnValue({
      success: true,
      data: {
        sellerName: "Alice",
        revenue: 400,
        status: "Confirmed",
      },
    })

    create(req as Request, res as Response)

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        sellerName: "Alice",
        revenue: 400,
        status: "Confirmed",
      })
    )

    expect(schemaMock).toHaveBeenCalledWith(req.body)
  })

  it("should return 400 for invalid data", () => {
    const req = {
      body: {
        sellerName: "Alice",
        revenue: 400,
        status: "Confirmed",
      },
    }
    const res: Partial<Response> = {
      json: jest.fn(),
      status: jest.fn(),
    }

    const schemaMock = jest.spyOn(orderSchema, "safeParse").mockReturnValue({
      success: false,
      error: { message: "Invalid data" } as ZodError,
    })

    create(req as Request, res as Response)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      error: { message: "Invalid data" },
    })
    expect(schemaMock).toHaveBeenCalledWith(req.body)
  })
})

describe("remove", () => {
  it("should remove an order successfully", () => {
    const req: Partial<Request> = {
      params: {
        orderId: "1",
      },
    }
    const res: Partial<Response> = {
      send: jest.fn(),
    }

    remove(req as Request, res as Response)

    expect(res.send).toHaveBeenCalledWith(200)
  })

  it("should return 400 if orderId is not provided", () => {
    const req: Partial<Request> = {
      params: {
        orderId: "",
      },
    }
    const res: Partial<Response> = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    }

    remove(req as Request, res as Response)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ error: "No orderId provided" })
  })
})
