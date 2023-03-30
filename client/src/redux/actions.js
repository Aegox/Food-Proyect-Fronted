import fetch from "cross-fetch";
export const GET_DIETS = "GET_DIETS";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const CREATE_USER = "CREATE_RECIPE";
export const FILTER_RECIPES = "FILTER_RECIPES";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const LOGIN_USER = "LOGIN_USER";
export const ADD_SAVED_RECIPE = "ADD_SAVED_RECIPE";
export const GET_SAVED_RECIPES = "GET_SAVED_RECIPES";

const URL = 'https://food-proyect-backend.onrender.com'

export const getDiets = () => {
    return async (dispatch) => {
        return fetch(`${URL}/diets`)
            .then(response => response.json())
            .then(data => dispatch({type: GET_DIETS, payload: data}))
            .catch(error => console.log(error))
    };
};

export const getRecipes = (name) => {
    return async (dispatch) => {
        let url =`${URL}/recipes`;
        if (name) {url += `?name=${name}`};
        return fetch(url)
            .then(response => response.json())
            .then(data => dispatch({type: GET_RECIPES, payload: data}))
            .catch(error => console.log(error))
    };
};

export const getRecipeDetail = (id) => {
    return async (dispatch) => {
        let url = `${URL}/recipes/${id}`;
        return fetch(url)
            .then(response => response.json())
            .then(data => dispatch({type: GET_RECIPE_DETAIL, payload: data}))
            .catch(error => console.log(error))
    };
};

export const createRecipe = (recipe) => {
    console.log(recipe)
    return async (dispatch) => {
        let url =  `${URL}/recipes`;
        return fetch(url, {
        method: "POST",
            headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify(recipe)
        })
            .then(response => response.json())
            .then(() => dispatch({type: CREATE_RECIPE}))
            .catch(error => console.log(error))
    };

}

export const filterRecipes = (payload) => {
    return {
        type: FILTER_RECIPES,
        payload
    }
}

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL
    }
}


export const filterByName = (payload) => {
    return {
        type: FILTER_BY_NAME,
        payload
    }
}

export const createUser = (user) => {
    console.log(user)
    return async (dispatch) => {
        let url = `${URL}/register`;
        return fetch(url, {
        method: "POST",
            headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(() => dispatch({type: CREATE_USER}))
            .catch(error => console.log(error))
    };

}

export const loginUser = (user) => {
    console.log(user)
    return async (dispatch) => {
        let url = `${URL}/login`;
        return fetch(url, {
        method: "POST",
            headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then((response) => dispatch({type: LOGIN_USER, payload: response}))
            .then(response => console.log(response))
            .catch(error => console.log(error))
    };

}

export const addSavedRecipe = (token, recipe) => {
    console.log(token ,recipe)
     return async (dispatch) => {
        let url = `${URL}/addRecipe`;
        return fetch(url, {
        method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({recipe})
        })
            .then(response => response.json())
            .then((response) => dispatch({type: ADD_SAVED_RECIPE, payload: response}))
            .then(response => console.log(response))
            .catch(error => console.log(error))
    };

}

export const getSavedRecipes = (token) => {
    console.log(token)
     return async (dispatch) => {
        let url = `${URL}/savedRecipes`;
        return fetch(url, {
        method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then((response) => dispatch({type: GET_SAVED_RECIPES, payload: response.recipes}))
            .then(response => console.log(response))
            .catch(error => console.log(error))
    };

}
