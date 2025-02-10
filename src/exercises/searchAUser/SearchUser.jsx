import { Link, useNavigate } from "react-router-dom";
import "./SearchUser.css";
export const SearchUser = ({ data, value, onChange, onClick }) => {
  return (
    <div className="searchContainer">
      <section className="searchSection">
        <h2>Search User from Github</h2>
        <form className="searchForm">
          <input
            type="text"
            placeholder="Please enter user name"
            value={value}
            onChange={onChange}
          />
          <input type="button" value="Search" onClick={onClick} />
        </form>
      </section>
      <section className="result">
        <p>Result</p>
        <ul>
          {data.map((user, index) => (
            <li key={index}>
              <p>{user.login}</p>
              <img src={user.avatar_url} />
            </li>
          ))}
        </ul>
      </section>
      <section style={{ position: "absolute", bottom: "55px" }}>
        <p>
          Go back to <Link to="/">Home</Link>
        </p>
        Go back to
        <a href="#" onClick={() => navigate(-1)}>
          Previous page
        </a>
      </section>
    </div>
  );
};
