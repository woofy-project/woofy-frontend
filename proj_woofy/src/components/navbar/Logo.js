import { Link } from "react-router-dom";

const logoImage = "/logo.png";
const Logo = () => {
  return (
    <>
      <Link href="/">
        <img src={logoImage} alt="Logo" />
      </Link>
    </>
  );
};

export default Logo;
