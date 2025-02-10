import { Link, useNavigate } from "react-router-dom";

export const QuoteGenerator = ({ data, fetchNewQuote }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          width: "500px",
          height: "55vh",

          backgroundColor: "lightgrey",
          margin: "100px auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ padding: "50px" }}>Random quote Generator</h1>
        <button type="button" onClick={fetchNewQuote}>
          load more
        </button>
        <p>{data.quote ? data.quote : ""}</p>
      </div>
      <section style={{ marginBottom: "50px" }}>
        <p>
          Go back to <Link to="/">Home</Link>
        </p>
        {/* <p>
          Go to{" "}
          <a href="#" onClick={() => navigate("/")}>
            home
          </a>
        </p> */}
        <p>
          Go back to{" "}
          <a href="#" onClick={() => navigate(-1)}>
            Previous page
          </a>
        </p>
      </section>
    </>
  );
};
