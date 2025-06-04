import { Link } from "react-router-dom";
import "./styles.logo.scss";
import logo from "@assets/default_transparent_765x625.png";

export function Logo() {
  return (
    <div className="logo">
      <Link href="/">
        <img src={logo} alt="Logo" />
      </Link>
    </div>
  );
}
