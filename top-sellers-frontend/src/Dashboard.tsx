import styles from "./Dashboard.module.css"
import { LoadingIcon } from "./Icons"
import { toDollars } from "./utils/toDollars"
import { useDashboard } from "./hooks/useDashboard"

type SellerRankingProps = {
  position: number
  sellerName: string
  sellerRevenue: string
}

const SellerRanking = ({
  position,
  sellerName,
  sellerRevenue,
}: SellerRankingProps) => {
  return (
    <tr>
      <td>{position}</td>
      <td>{sellerName}</td>
      <td>{sellerRevenue}</td>
    </tr>
  )
}

const Dashboard = () => {
  const { loading, error, refetch, sellerList, totalRevenue } = useDashboard()

  return (
    <div>
      <header className={styles.header}>
        <h1>Top Sellers</h1>
      </header>
      <main>
        {loading && <LoadingIcon />}

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
