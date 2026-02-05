function Home() {
    return (
        <div style={styles.page}>
            <h1>🍽️ Welcome to Foodie</h1>
            <p>Your favorite food, delivered fast 🚀</p>

            <h2>Categories</h2>
            <div style={styles.row}>
                <div style={styles.card}>🍕 Pizza</div>
                <div style={styles.card}>🍔 Burger</div>
                <div style={styles.card}>🍜 Noodles</div>
                <div style={styles.card}>🥗 Healthy</div>
            </div>

            <h2 style={{ marginTop: "30px" }}>Popular Foods</h2>
            <div style={styles.row}>
                <div style={styles.food}>
                    <h3>Cheese Pizza</h3>
                    <p>₹199</p>
                </div>
                <div style={styles.food}>
                    <h3>Veg Burger</h3>
                    <p>₹99</p>
                </div>
                <div style={styles.food}>
                    <h3>Hakka Noodles</h3>
                    <p>₹149</p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    page: {
        padding: "30px",
        textAlign: "center",
    },
    row: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        flexWrap: "wrap",
        marginTop: "15px",
    },
    card: {
        background: "#fde68a",
        padding: "15px 25px",
        borderRadius: "8px",
        fontWeight: "bold",
    },
    food: {
        background: "#f3f4f6",
        padding: "20px",
        borderRadius: "10px",
        width: "150px",
    },
};

export default Home;
