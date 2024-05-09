import { useEffect, useState } from "react";
import "./App.css";
import { Recipe } from "./components/Recipe";
import { getRecipeById } from "./server";
import { TRecipe } from "./types";

function App() {
  const [recipe, setRecipe] = useState<TRecipe | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const recipe = await getRecipeById("1");
      setTimeout(() => {
        setRecipe(recipe);
        setLoading(false);
      }, 2000);
    })();
  }, []);

  return <>{loading ? <p>Loading...</p> : <Recipe recipe={recipe!} />}</>;
}

export default App;
