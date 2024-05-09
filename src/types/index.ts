export interface TRecipe {
  id: string;
  image: string;
  name: string;
  description: string;
  prepTime: TPrepTime;
  ingredients: string[];
  instructions: TInstruction[];
  nutrition: TNutrition[];
}

/**
 * The time is given in minutes
 */
interface TPrepTime {
  total: number;
  preparation: number;
  cooking: number;
}

interface TInstruction {
  step: string;
  description: string;
}

interface TNutrition {
  name: string;
  value: number;
  unit: string;
}
