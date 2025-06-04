import { useEffect, useState } from "react";
import { getRandomRecipes } from "@utils/recipeUtils";
import { Navigate } from "react-router-dom";

export function SurpriseRecipe() {
  const [recipeSurprise, setRecipeSurprise] = useState();

  useEffect(() => {
    const getRecipes = async () => {
      const data = await getRandomRecipes(1);
      setRecipeSurprise(data[0].id);
    };
    getRecipes();
  }, []);

  if (!recipeSurprise) {
    return (
      <main
        style={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <h1 style={{ color: "black" }}>
          {" "}
          Espere um momento, estamos carregando uma receita especial para você!
        </h1>
      </main>
    );
  } else {
    return <Navigate to={`/recipe/${recipeSurprise}`} replace />;
  }
}
