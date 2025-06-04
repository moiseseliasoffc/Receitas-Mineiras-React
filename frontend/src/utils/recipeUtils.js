import axios from "axios";

export const getRecipes = async () => {
  try {
    const response = await axios.get("/data/recipes.json");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar receitas:", error);
    return [];
  }
};

export const getRandomRecipes = async quantity => {
  try {
    const recipes = await getRecipes();
    const shuffledRecipes = recipes.sort(() => 0.5 - Math.random());
    return shuffledRecipes.slice(0, quantity);
  } catch (error) {
    console.error("Erro ao buscar receitas:", error);
    return [];
  }
};

export const searchRecipe = async id => {
  try {
    const recipes = await getRecipes();
    return recipes.find(recipe => recipe.id === id);
  } catch (error) {
    console.error("Erro ao buscar receitas:", error);
    return [];
  }
};
