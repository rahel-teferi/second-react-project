import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
        position: "fixed",
        bottom: 0,
        width: "100%",
        // height: "10vh",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "50px",
          margin: "20px auto",
          listStyle: "none",
          width: "100",
        }}
      >
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
      <p>Made for practice purposes</p>
    </footer>
  );
};
