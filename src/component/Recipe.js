import React, { Fragment } from "react";


function Recipe () {
         return (
                <Fragment>
                  <div className="bloc">
                     <h1 className="title-bloc1"> Simple Omelette Recipe</h1>
                     <div></div>
                     <p> An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
                            to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
                  </div>
                  <div></div>
                  <div className="bloc-color">
                     <h2 className="title-bloc2">Preparation time</h2>
                     <div></div>
                     <ul>
                        <li className="list1"><strong >Total:</strong> Approximately 10 minutes</li>
                        <li className="list1"><strong >Preparation:</strong> 5 minutes</li>
                        <li className="list1"><strong >Cooking:</strong> 5 minutes</li>
                     </ul>
                  </div>
                  <div></div>
                  <div className="bloc">
                     <p className="title-bloc3-4-5">Ingredients</p>
                     <div></div>
                     <ul>
                        <li className="list1">2-3 large eggs</li>
                        <li className="list1">Salt, to taste</li>
                        <li className="list1">Pepper, to taste</li>
                        <li className="list1"> 1 tablespoon of butter or oil</li>
                        <li className="list1"> Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                     </ul>
                  </div>
                  <div className="line"></div>
                  <div className="bloc">
                     <p className="title-bloc3-4-5">Instructions</p>
                     <div></div>
                     <ol>
                        <li>
                          <strong>Beat the eggs:</strong>  In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
                        </li>
                        <li><strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.</li>
                        <li>
                           <strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
                        </li>
                        <li>
                           <strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
                        <li>
                          <strong>Fold and serve:</strong>  As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
                        </li>
                        <li><strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.</li>
                     </ol>
                  </div>
                  <div></div>
                  <div className="bloc">
                     <p className="title-bloc3-4-5" >Nutrition</p>
                     <div></div>
                     <p>The table below shows nutritional values per serving without the additional fillings.</p>
                     <div></div>
                     <p  className="divider">Calories <span>277kcal</span></p>
                     <div className="line"></div>
                     <p className="divider">Carbs <span>0g</span></p>
                     <div className="line"></div>
                     <p className="divider"> Protein <span>20g</span></p>
                     <div className="line"></div>
                     <p className="divider">  Fat <span>20g</span></p>
                  </div>
                </Fragment>
         )
            
    }


export default Recipe