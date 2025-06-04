import { Slides, PopularRecipes } from "./parts/";
import "./styles.home.scss";

export function Home() {
  return (
    <main className="homePage">
      <Slides />
      <PopularRecipes />
    </main>
  );
}
