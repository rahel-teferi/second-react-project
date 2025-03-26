import { ProfilePic } from "./ProfilePic";
import { ExperienceAndCource } from "./ExperienceAndCource";
import "./Profile.css";

export const Profile = () => {
  return (
    <section className="portfolio">
      <div className="profile">
        <ProfilePic />
        <ExperienceAndCource />
      </div>
    </section>
  );
};
