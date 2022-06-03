import React from "react";
import RecipeRow from "./RecipeRow";

function RecipeList({recipes, setRecipes}) {
  
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th style={{width:"10%"}}>Name</th>
            <th style={{width:"10%"}}>Cuisine</th>
            <th style={{width:"10%"}}>Photo</th>
            <th style={{width:"30%"}}>Ingredients</th>
            <th style={{width:"30%"}}>Preparation</th>
            <th style={{width:"10%"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipes.map((recipe, index)=>
          <RecipeRow setRecipes={setRecipes} recipes={recipes} recipe={recipe} index={index}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
