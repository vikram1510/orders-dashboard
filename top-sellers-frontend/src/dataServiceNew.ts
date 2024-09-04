import axios from "axios"
import { OrderItem } from "./types"

const BE_URL = "http://localhost:4000"

export function getOrders() {
  return axios.get<OrderItem[]>(`${BE_URL}/orders`)
}

getOrders()
