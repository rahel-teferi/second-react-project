import "./Profile.css";
import pic from "/RT.jpg";

export const ProfilePic = () => {
  return (
    <div className="profile-pic">
      <img src={pic} />
      <h2>Rahel Teferi</h2>
      <div className="contact">
        <h4>About Me</h4>
        <p>Full-stack developer</p>

        <h4>Contact</h4>
        <p>
          Email: <a href="mailto:'rahel.tem@gmail.com'">rahel.tem@gmail.com</a>
        </p>

        <p>
          Github:
          <a href="https://github.com/rahel-teferi" target="_blank">
            https://github.com/rahel-teferi
          </a>
        </p>
      </div>
    </div>
  );
};
