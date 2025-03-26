import { NavLink } from "react-router-dom";

export const ExperienceAndCource = () => {
  return (
    <div className="school">
      <h3>Work Experience</h3>

      <p>2016 - 2023</p>

      <h4 style={{ textDecoration: "underline" }}>NIRx Medizintechnik GmbH</h4>

      <p>Logistics Team lead</p>
      <p>
        Process, fulfill, and track customer orders using ERP system Microsoft
        dynamics 365
      </p>
      <p>
        Work closely with the sales team to handle orders and provide customer
        service
      </p>

      <p>Preparing reports and work instructions for processes</p>
      <h3>Cources</h3>

      <p>2024 - 2025</p>

      <h4 style={{ textDecoration: "underline" }}>Hamburg Coding School</h4>
      <p>Full-stack web development</p>
      <ul>
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
      <h3>React projects</h3>
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
