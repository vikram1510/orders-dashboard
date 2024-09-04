import express from "express"
import cors from "cors"

import jsonData from "../orders.json"

const orders = jsonData.orders

const app = express()
const port = 4000

app.use(cors())

app.use(express.json())

app.get("/orders", (_, res) => {
  res.json(orders)
})

app.listen(port, () => {
  console.log(jsonData.orders.length)
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
