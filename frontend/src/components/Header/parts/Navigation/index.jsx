import { useState, useEffect, useRef } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import "./styles.navigation.scss";
import { Link } from "react-router";

export function Navigation() {
  const [categoryMenuState, setCategoryMenuState] = useState(false);
  const categoryMenuDropdownRef = useRef(null);

  function categoryMenuClick() {
    setCategoryMenuState(!categoryMenuState);
  }

  function CategoryMenDropdown() {
    function handleClickOutside(event) {
      if (
        categoryMenuDropdownRef.current &&
        !categoryMenuDropdownRef.current.contains(event.target)
      ) {
        setCategoryMenuState(false);
      }
    }

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
      <div
        className={`categoryMenu ${
          !categoryMenuState ? "categoryMenuClosed" : "categoryMenuOpened"
        }`}
      >
        <Link className="button categoryButton" to="/category/refeicao">
          Refeição
        </Link>
        <Link className="button categoryButton" to="/category/cafe-da-manha">
          Café da manhã
        </Link>
        <Link className="button categoryButton" to="/category/sobremesa">
          Sobremesa
        </Link>
        <Link className="button categoryButton" to="/category/aperitivo">
          Aperitivo
        </Link>
        <Link className="button categoryButton" to="/category/bebida">
          Bebida
        </Link>
      </div>
    );
  }

  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/" className="button">
            INICIO
          </Link>
        </li>
        <li className="liCategory" ref={categoryMenuDropdownRef}>
          <a className={`button ${categoryMenuState ? "active" : ""}`} onClick={categoryMenuClick}>
            CATEGORIA
            {categoryMenuState ? (
              <ChevronUpIcon size={16} className="iconCategory" />
            ) : (
              <ChevronDownIcon size={16} />
            )}
          </a>
          <CategoryMenDropdown />
        </li>
        <li>
          <Link to="/about" className="button">
            SOBRE
          </Link>
        </li>
        <li>
          <Link to="/recipe/0" className="button">
            SURPREENDA-ME
          </Link>
        </li>
      </ul>
    </nav>
  );
}
