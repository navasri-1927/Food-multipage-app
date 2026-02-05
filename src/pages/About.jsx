function About() {
    return (
        <div style={styles.page}>
            <h1>ℹ️ About Foodie</h1>
            <p>
                Foodie is a simple food ordering app built using
                React, Vite, and React Router.
            </p>

            <ul style={styles.list}>
                <li>🍔 Tasty food</li>
                <li>🚚 Fast delivery</li>
                <li>💰 Affordable price</li>
                <li>📱 Easy to use</li>
            </ul>
        </div>
    );
}

const styles = {
    page: {
        padding: "40px",
        maxWidth: "600px",
        margin: "auto",
        fontSize: "18px",
    },
    list: {
        marginTop: "20px",
        lineHeight: "2",
    },
};

export default About;
