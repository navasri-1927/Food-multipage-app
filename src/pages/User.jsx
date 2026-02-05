import { useParams } from "react-router-dom";

function User() {
    const { id } = useParams();

    return (
        <div style={styles.page}>
            <h1>👤 User Profile</h1>

            <div style={styles.box}>
                <p><strong>User ID:</strong> {id}</p>
                <p><strong>Name:</strong> Food Lover</p>
                <p><strong>Favorite:</strong> Pizza 🍕</p>
                <p><strong>City:</strong> Chennai</p>
            </div>
        </div>
    );
}

const styles = {
    page: {
        padding: "40px",
        textAlign: "center",
    },
    box: {
        display: "inline-block",
        padding: "20px",
        background: "#fef2f2",
        borderRadius: "10px",
        textAlign: "left",
    },
};

export default User;
