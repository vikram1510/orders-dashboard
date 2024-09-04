import express from "express"
import cors from "cors"
import * as orders from "./controllers/orders"

const app = express()
const port = 4000

app.use(cors())

app.use(express.json())

app.get("/orders", orders.get)

app.post("/orders", orders.create)

app.delete("/orders/:orderId", orders.remove)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
