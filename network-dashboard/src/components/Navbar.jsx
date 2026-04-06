import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#222", color: "white" }}>
      <Link to="/">Hosts</Link>
      <Link to="/flows">Flows</Link>
      <Link to="/stats">Stats</Link>
      <Link to="/rules" style={{ color: "white" }}>Rules</Link>
    </nav>
  );
}

export default Navbar;