import { ProfilePic } from "./ProfilePic";
import { ExperienceAndCource } from "./ExperienceAndCource";
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
        <ExperienceAndCource />
      </div>
    </section>
  );
};
