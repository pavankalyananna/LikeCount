import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{textAlign: "center",
        marginTop: "80px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#58b622ff",
          marginBottom: "20px",
          fontSize: "36px",
          textTransform: "uppercase"
        }}
      >
        Like Counter
      </h1>

      <p style={{ fontSize: "22px", marginBottom: "25px" }}>
        The count is{" "}
        <span style={{ color: "red", fontWeight: "bold", fontSize: "28px" }}>
          {count}
        </span>
      </p>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: "#007bff",
          border: "none",
          padding: "12px 25px",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "18px",
          transition: "0.2s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
