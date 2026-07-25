import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "110px",
            color: "#2563eb",
            marginBottom: "10px",
          }}
        >
          404
        </h1>

        <h2>Oops! Page Not Found</h2>

        <p
          style={{
            color: "#6b7280",
            margin: "20px 0",
          }}
        >
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          style={{
            background: "#2563eb",
            color: "white",
            textDecoration: "none",
            padding: "14px 28px",
            borderRadius: "10px",
          }}
        >
          Back to Home
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default NotFound;