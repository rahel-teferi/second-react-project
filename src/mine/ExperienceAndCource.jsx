import { NavLink } from "react-router-dom";

export const ExperienceAndCource = () => {
  return (
    <div className="school">
      <h3>Work Experience</h3>

      <p>2016 - 2023</p>

      <h4 style={{ textDecoration: "underline" }}>NIRx Medizintechnik GmbH</h4>

      <p style={{ paddingBottom: "10px" }}>Logistics Team lead</p>
      <p>
        Process, fulfill, and track customer orders using ERP system Microsoft
        dynamics 365
      </p>
      <p>
        Work closely with the sales team to handle orders and provide customer
        service
      </p>

      <p>Preparing reports and work instructions for processes</p>
      <h3>Courses</h3>

      <p>2024 - 2025</p>

      <h4 style={{ textDecoration: "underline" }}>Hamburg Coding School</h4>
      <p>Full-stack web development</p>
      <ul style={{ paddingLeft: "20px", paddingTop: "10px" }}>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>React</li>
        <li>Git</li>
        <li>MySQL</li>
        <li>Bootstrap</li>
      </ul>
      <h3>project with HTML, CSS, JS and Bootstrap</h3>
      <a
        href="https://rahel-teferi.github.io/hcs-project/html/index.html"
        target="_blank"
      >
        <h5>Amazing Animals: Learn and Quiz!</h5>
      </a>
      <h3>React practice projects</h3>
      <NavLink to="digitalClock">
        <h5>Digital Clock</h5>
      </NavLink>
      <NavLink to="quoteGenerator">
        <h5>Random quote generator</h5>
      </NavLink>
      <NavLink to="carosel">
        <h5>Carosel</h5>
      </NavLink>
      <NavLink to="shoppingList">
        <h5>Shopping list</h5>
      </NavLink>
      <NavLink to="searchUser">
        <h5>Search User</h5>
      </NavLink>
    </div>
  );
};
