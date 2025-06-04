import { CircleArrowRightIcon, User2Icon, UserPlus } from "lucide-react";
import "./styles.userMenu.scss";
import { Link } from "react-router-dom";

export function UserMenu() {
  const isUserLoggedIn = localStorage.getItem("loggedIn");

  function UserLoggedMenu() {
    return (
      <div className="userMenu">
        <Link className="buttonRoyal" to="/account">
          Minha Conta <User2Icon />
        </Link>
      </div>
    );
  }

  function UserNotLoggedMenu() {
    return (
      <div className="userMenu">
        <Link className="buttonRoyal" to="/login">
          Entrar
          <CircleArrowRightIcon />
        </Link>
        <Link className="buttonRoyal" to="/register">
          Criar conta
          <UserPlus />
        </Link>
      </div>
    );
  }

  if (isUserLoggedIn == "true") {
    return <UserLoggedMenu />;
  } else {
    if (!isUserLoggedIn) {
      localStorage.setItem("loggedIn", "false");
    }
    return <UserNotLoggedMenu />;
  }
}
