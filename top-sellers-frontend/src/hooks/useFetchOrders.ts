import { useEffect, useState } from "react"
import { getOrders } from "../dataService"
import { OrderItem } from "../types"

export const useFetchOrders = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>()
  const [orders, setOrders] = useState<OrderItem[] | null>()

  const fetch = () => {
    getOrders()
      .then(setOrders)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }

  const refetch = () => {
    setLoading(true)
    setError(null)
    setOrders(null)
    fetch()
  }

  useEffect(() => {
    fetch()
  }, [])

  return { orders, loading, error, refetch }
}
