import { Logo, Search, UserMenu, Navigation } from "./parts";
import "./styles.header.scss";

export function Header() {
  return (
    <header>
      <Logo />
      <Search />
      <UserMenu />
      <Navigation />
    </header>
  );
}
