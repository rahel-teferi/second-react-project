import { ProfilePic } from "./ProfilePic";
import { School } from "./School";
import "./profile.css";
import { Hero } from "./Hero";

export const Profile = () => {
  return (
    <section className="portfolio">
      {/* <div className="hero"> */}
      {/* // <Hero /> */}

      {/* </div> */}
      <div className="profile">
        <ProfilePic />
        <School />
      </div>
    </section>
  );
};
