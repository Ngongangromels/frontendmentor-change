import { TRecipe } from "../types";

/**
 * What is a promise in javascript and why is it useful?
 * how to use async/await in javascript?
 */
export async function getRecipeById(recipeId: string): Promise<TRecipe> {
  return {
    id: recipeId,
    image: "https://via.placeholder.com/150",
    name: "Recipe Name",
    description: "Recipe Description",
    prepTime: {
      total: 60,
      preparation: 30,
      cooking: 30,
    },
    ingredients: ["Ingredient 1", "Ingredient 2"],
    instructions: [
      {
        step: "Step 1",
        description: "Description 1",
      },
      {
        step: "Step 2",
        description: "Description 2",
      },
    ],
    nutrition: [
      {
        name: "Calories",
        value: 100,
        unit: "kcal",
      },
    ],
  };
}
