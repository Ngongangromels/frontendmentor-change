import React from "react";
import { TRecipe } from "../types";

interface Props {
  recipe: TRecipe;
}

export const Recipe: React.FC<Props> = ({ recipe }) => {
  return (
    <>
      <img src={recipe.image} />
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      <div>
        <h4>Preparation Time</h4>
        <p>
          <strong>Total:</strong> approximately {recipe.prepTime.total} minutes
        </p>
        <p>
          <strong>Preparation:</strong> {recipe.prepTime.preparation} minutes
        </p>
        <p>
          <strong>Cooking:</strong>
          {recipe.prepTime.cooking} minutes
        </p>
      </div>
      <div>
        <h4>Ingredients</h4>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Instructions</h4>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>
              <h5>{instruction.step}</h5>
              <p>{instruction.description}</p>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h4>Nutrition</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value (with unit)</th>
            </tr>
          </thead>
          <tbody>
            {recipe.nutrition.map((nutrition, index) => (
              <tr key={index}>
                <td>{nutrition.name}</td>
                <td>
                  {nutrition.value} {nutrition.unit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
