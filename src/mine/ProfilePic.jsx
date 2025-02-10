import "./profile.css";
import pic from "/sunset.jpg";

export const ProfilePic = () => {
  return (
    <div className="profile-pic">
      <img src={pic} />
      <h2>Rahel Teferi</h2>
      <h4>About Me</h4>
      <p>Full-stack developer</p>
    </div>
  );
};
