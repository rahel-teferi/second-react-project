import { Link, useNavigate } from "react-router-dom";

export const QuoteGenerator = ({ data, fetchNewQuote }) => {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100%", height: "93vh" }}>
      <h1 style={{ padding: "50px", textAlign: "center" }}>
        Random quote Generator
      </h1>
      <div
        style={{
          width: "500px",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "lightgrey",
          margin: "auto",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <button type="button" onClick={fetchNewQuote}>
          Load more
        </button>
        <p>{data.quote ? data.quote : ""}</p>
      </div>
      <section style={{ margin: "100px 20px" }}>
        <p>
          Go back to <Link to="/">Home</Link>
        </p>

        <p>
          Go back to{" "}
          <a href="#" onClick={() => navigate(-1)}>
            Previous page
          </a>
        </p>
      </section>
    </div>
  );
};
