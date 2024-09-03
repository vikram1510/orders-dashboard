import { useEffect, useState } from "react"
import styles from "./Dashboard.module.css"
import { LoadingIcon } from "./Icons"
import { getOrders } from "./dataService"
import { OrderItem } from "./types"
import { useFetchOrders } from "./hooks/useFetchOrders"
import { calculateTotalRevenue } from "./utils/calculateTotalRevenue"
import { toDollars } from "./utils/toDollars"
import { aggregateOrders } from "./utils/aggregateOrders"
import { sortByRevenue } from "./utils/sortByRevenue"
import { filterOrders } from "./utils/filterOrders"

// Overview:
// You are provided with an incomplete <Dashboard /> component.
// Demo video - You can view how the completed functionality should look at: https://drive.google.com/file/d/1lH8ojlvb62I_9z3jGxhNEY_-8S4trNo7/view?usp=sharing
// This demo video uses the same dataset, so your total and ranking calculations should match it
// You are not allowed to add any additional HTML elements.
// You are not allowed to use refs.

// Requirements:
// Once the <Dashboard /> component is mounted, load the order data using the getOrders function imported above
// Once all the data is successfully loaded, hide the loading icon
// Calculate and display the total revenue
// Display a ranking showing the sellers ordered by their total revenue using the <SellerRanking /> component.
// The seller with the highest revenue should be shown at the top with position 1.
// All the revenue values should only consider Confirmed orders. Canceled orders should be ignored.
// All dollar amounts should be displayed to 2 decimal places
// The getOrders function times out frequently. Display any errors returned while loading the data in the provided div.
// The retry button should clear the error and reattempt the request

const SellerRanking = ({ position, sellerName, sellerRevenue }: any) => {
  return (
    <tr>
      <td>{position}</td>
      <td>{sellerName}</td>
      <td>{sellerRevenue}</td>
    </tr>
  )
}

const Dashboard = () => {
  const { orders, loading, error, refetch } = useFetchOrders()

  const filteredOrders = orders ? filterOrders(orders) : null

  const totalRevenue = filteredOrders
    ? toDollars(calculateTotalRevenue(filteredOrders))
    : null

  const sellerList = filteredOrders
    ? sortByRevenue(aggregateOrders(filterOrders(filteredOrders)))
    : null

  return (
    <div>
      <header className={styles.header}>
        <h1>Top Sellers</h1>
      </header>
      <main>
        {loading && <LoadingIcon />}
        {/* Place any data fetching errors inside this div, only render the div if there are errors */}

        {error && (
          <div data-testid="error-container" className={styles.errorContainer}>
            <div className={styles.errorMessage}>{error}</div>
            <button onClick={refetch}>Retry</button>
          </div>
        )}

        {sellerList && !error && (
          <>
            <div>
              <p className={styles.summary}>
                <strong>Total revenue: </strong>
                <span id="totalRevenue">{totalRevenue}</span>
              </p>
            </div>
            <h2>Seller Rankings</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Seller Name</th>
                  <th>Seller Revenue</th>
                </tr>
              </thead>
              <tbody>
                {sellerList.map((seller, i) => (
                  <SellerRanking
                    key={i}
                    position={i + 1}
                    sellerName={seller.sellerName}
                    sellerRevenue={toDollars(seller.totalRevenue)}
                  />
                ))}
              </tbody>
            </table>
          </>
        )}
      </main>
    </div>
  )
}

export default Dashboard
