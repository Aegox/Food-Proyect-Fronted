import {useDispatch, useSelector} from 'react-redux';
import { useState, useEffect} from 'react';
import Recipes  from "./Recipes.jsx";
import * as actions from '../redux/actions.js';
import styleRecipeDetail from "../styles/RecipeDetail.module.css";
import {Link} from 'react-router-dom'

const SavedRecipes = () => {
    const recipes = useSelector((store) => store.savedRecipes);    
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    useEffect(() => {
        dispatch(actions.getSavedRecipes(token))
    },[])

    return (
        <div>
            <div className={styleRecipeDetail.nav}>
                <Link to="/home">
                    <h2>{"<"}</h2><h4>Back to Home</h4>
                </Link>
            </div>
            {recipes ? <Recipes recipes={recipes}/> : <h1 className={styleRecipeDetail.savedtext}>there is not saved recipes </h1>}
        </div>
    )
};

export default SavedRecipes;
