import axios from "axios"
import { OrderItem } from "./types"

const BE_URL = "http://localhost:4000"

export async function getOrders() {
  const res = await axios.get<OrderItem[]>(`${BE_URL}/orders`)
  return res.data
}
