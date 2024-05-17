import styles from "./dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={styles.dashboardBody}>
            <h1 className={styles.h1}>Turbidity</h1>
            <table id="data-table" className={styles.table}>
                <thead>
                    <tr className={styles.td}>
                        <th className={styles.th}>Value</th>
                        <th className={styles.th}>State</th>
                    </tr>
                </thead>
                <tbody id="data-rows" className={styles.td}>
                </tbody>
            </table>
            <button id="next-row" className={styles.button}>Next Row</button>
        </div>
    );
};

export default Dashboard;