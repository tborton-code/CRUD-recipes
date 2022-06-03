import React from "react";

export default function RecipeRow({setRecipes, recipes, recipe, index}){
    const deleteRecipe = (curr) => {
        curr.persist()
        let post = curr.target.parentNode.parentNode.getAttribute("postId")
        recipes.splice((+post),1)
        setRecipes((value)=>[...recipes])
    }
    return (
            <tr postId={index}>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td><img src={recipe.photo}/></td>
                <td>{recipe.ingredients}</td>
                <td>{recipe.preparation}</td>
                <td><button name='delete' onClick={deleteRecipe}>Delete</button></td>
            </tr>
    )
};