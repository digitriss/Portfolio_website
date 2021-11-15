import Instagram from "../../assets/Instagram.svg";
import Facebook from "../../assets/Facebook.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>Copright by CodersLab</p>
      <div className="icons">
        <img src={Facebook} alt="facebook" />
        <img src={Instagram} alt="instagram" />
      </div>
    </footer>
  );
};
