import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav style={styles.nav}>
        <h2 style={styles.logo}>🍔 Foodie</h2>
        <div>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/user/101" style={styles.link}>Profile</Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </>
  );
}

const styles = {
  nav: {
    padding: "15px 30px",
    backgroundColor: "#e11d48",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "white",
    margin: 0,
  },
  link: {
    color: "white",
    marginLeft: "15px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default App;
