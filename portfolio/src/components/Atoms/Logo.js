import Decoration from "../../assets/Decoration.svg";

export const Logo = ({ text }) => {
  return (
    <div className="logo">
      <h1>{text}</h1>
      <img src={Decoration} alt={"Decoration"} />
    </div>
  );
};
