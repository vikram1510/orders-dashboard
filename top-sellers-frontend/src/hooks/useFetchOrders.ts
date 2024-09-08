import { useEffect, useState } from "react"
import { getOrders } from "../dataServiceNew"
import { OrderItem } from "../types"

export const useFetchOrders = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>()
  const [orders, setOrders] = useState<OrderItem[] | null>()

  const fetch = () => {
    getOrders()
      .then((res) => setOrders(res))
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
