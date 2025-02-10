import "./Profile.css";
import sunset from "/sunset.jpg";
export const Hero = () => {
  return (
    <div>
      <h2 style={{ color: "black", textAlign: "center", padding: "10px" }}>
        <img src={sunset} />
      </h2>
    </div>
  );
};
