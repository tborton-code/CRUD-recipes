import React, { useState } from "react";

function RecipeCreate({setRecipes}) {

  const initialRecipe = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients:'',
    preparation:''
  }

  const [recipe, setRecipe]=useState(initialRecipe)

  const editRecipe = ({target}) => {
    setRecipe({...recipe,[target.name]:target.value})
  }

  const addRecipe = (recipe) => {
    setRecipes((value)=>[...value, recipe])
  }

  const submit = (event) => {
    event.preventDefault()
    addRecipe(recipe)
    setRecipe(initialRecipe)
  }
  
  return (
    <form name="create" onSubmit={submit}>
      <table>
        <tbody>
          <tr>
            <td> <input placeholder="name" id="name" type="text" name="name" required={true} onChange={editRecipe} value={recipe.name}/> </td>
            <td> <input placeholder="cuisine" id="cuisine" type="text" name="cuisine" required={true} onChange={editRecipe} value={recipe.cuisine}/> </td>
            <td><input placeholder="photo url" id="photo" name="photo" type="url" required={true} onChange={editRecipe} value={recipe.photo}/></td>
            <td><textarea name="ingredients"  placeholder="ingredients" id="ingredients" type="text" required={true} onChange={editRecipe} value={recipe.ingredients}/> </td>
            <td><textarea name="preparation" placeholder="preparation" id="preparation" type="text" required={true} onChange={editRecipe} value={recipe.preparation}/> </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
