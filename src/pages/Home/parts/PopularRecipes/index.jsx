import { useState, useEffect } from "react";
import "./styles.popularRecipes.scss";
import { getRandomRecipes } from "@utils/recipeUtils";
import { Link } from "react-router-dom";

export function PopularRecipes() {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const data = await getRandomRecipes(12);
      setPopularRecipes(data);
    };

    getRecipes();
  }, []);

  return (
    <section className="popularRecipesPart">
      <h1>Receitas Populares</h1>
      <ul>
        {popularRecipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.nome}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
