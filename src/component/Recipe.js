import React, { Fragment } from "react";

// const instructions = [
//    {
//       step: "Beat the eggs:",
//       description: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."
//    },
//    {}
// ]

const instructions = [ 
               {
                step:"Beat the eggs:",
                description: " In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."
               },
               {
               step:"Heat the pan:", 
               description:" Place a non-stick frying pan over medium heat and add butter or oil."
               }, 
               {
                step:"Cook the omelette:",
                description: " Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
               },
               {
               step:"Add fillings (optional):", 
               description:" When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
               },
               {
               step:"Fold and serve:", 
               description: " As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
               },
               {
                step:"Enjoy:",
                description: " Serve hot, with additional salt and pepper if needed."
               }
];
 


function Recipe () {
         return (
                <Fragment>
                  <div className="bloc">
                     <h1 className="title-bloc1"> Simple Omelette Recipe</h1>
                     
                     <p> An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
                            to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
                  </div>
                 
                  <div className="bloc-color">
                     <h2 className="title-bloc2">Preparation time</h2>
                     
                     <ul>
                        <li className="list1"><strong >Total:</strong> Approximately 10 minutes</li>
                        <li className="list1"><strong >Preparation:</strong> 5 minutes</li>
                        <li className="list1"><strong >Cooking:</strong> 5 minutes</li>
                     </ul>
                  </div>
                  
                  <div className="bloc">
                     <p className="title-bloc3-4-5">Ingredients</p>
                     
                     <ul>
                        <li className="list1">2-3 large eggs</li>
                        <li className="list1">Salt, to taste</li>
                        <li className="list1">Pepper, to taste</li>
                        <li className="list1"> 1 tablespoon of butter or oil</li>
                        <li className="list1"> Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                     </ul>
                  </div>
                  <hr/>
                  <div className="bloc">
                     <p className="title-bloc3-4-5">Instructions</p>
                       <ol>{instructions.map((instruction, index) => <li key={index}><strong>{instruction.step}</strong>   {instruction.description}</li>)}</ol>
                  </div>
                  <hr/>
                  <div className="bloc">
                  <p className="title-bloc3-4-5" >Nutrition</p>
                  <p>The table below shows nutritional values per serving without the additional fillings.</p>
                  <table>
                        <tr className="border">
                           <td>Calories</td>
                           <td><span>277kcal</span></td> 
                        </tr>
                        <tr className="border">
                           <td>Carbs </td>
                           <td><span>0g</span></td>
                        </tr>
                        <tr className="border">
                           <td>Protein</td>
                           <td><span>20g</span></td>
                        </tr>
                        <tr>
                           <td>Fat</td>
                           <td><span>20g</span></td>
                        </tr>
                        </table>
                  </div>
                </Fragment>
         )
            
    }


export default Recipe