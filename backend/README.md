# Top Sellers Backend

## Getting started

1. Install packages - `npm i`

2. Start app locally - `npm run dev`

## API

- Get all orders - `GET /orders`

- Create an order `POST /orders` with body `{ sellerName: string, revenue: number, status: "Confirmed" OR "Canceled" }`

- Delete an order by orderId - `DELETE /orders/:orderId`
