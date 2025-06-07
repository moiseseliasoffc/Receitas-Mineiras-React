import {
  ChevronDown,
  ChevronUp,
  CircleArrowRightIcon,
  LogOutIcon,
  Star,
  User2Icon,
  UserPlus,
} from "lucide-react";
import "./styles.userMenu.scss";
import { Link } from "react-router";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";

export function UserMenu() {
  const { isAuthenticated, user, loading } = useAuthStore();
  function UserLoggedMenu() {
    const firstName = user?.displayName?.split(" ")[0] || "";
    const secondName = user?.displayName?.split(" ")[1] || "";
    const displayName = user ? `${firstName} ${secondName}` : "Minha conta";
    const [userMenuDropdownState, setUserMenuDropdownState] = useState(false);
    return (
      <div
        className={"userMenu"}
        style={userMenuDropdownState ? { flexDirection: "column", alignItems: "center" } : {}}
      >
        <button
          className="buttonRoyal"
          onClick={() => setUserMenuDropdownState(!userMenuDropdownState)}
          style={userMenuDropdownState ? { opacity: "0" } : {}}
        >
          {displayName}
          <User2Icon />
          <ChevronDown />
        </button>

        <div className="userMenuDropdown" style={userMenuDropdownState ? { display: "flex" } : {}}>
          <button
            className="buttonRoyal"
            onClick={() => setUserMenuDropdownState(!userMenuDropdownState)}
          >
            {displayName}
            <ChevronUp />
          </button>
          <Link className="buttonRoyal" to="/account">
            Minha conta <User2Icon />
          </Link>
          <Link className="buttonRoyal" to="/favorites">
            Favoritos <Star />
          </Link>
          <Link className="buttonRoyal" to="/logout">
            Sair <LogOutIcon />
          </Link>
        </div>
      </div>
    );
  }

  function SkeletonUserMenu() {
    function ButtonSkeleton() {
      return (
        <div
          className="buttonRoyal"
          disabled
          style={{
            cursor: "default",
            width: "6em",
            opacity: "0.5",
            animation: "scaleLoop 0.8s infinite alternate",
          }}
        ></div>
      );
    }
    return (
      <div className="userMenu">
        <ButtonSkeleton />
        <ButtonSkeleton />
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

  if (loading) return <SkeletonUserMenu />;
  return isAuthenticated ? <UserLoggedMenu /> : <UserNotLoggedMenu />;
}
