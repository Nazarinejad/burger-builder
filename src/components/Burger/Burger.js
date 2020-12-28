import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients) //returns an array of the keys of ingredients - their names like salad, bacon
    .map(igKey=>{
        return [...Array(props.ingredients[igKey])] //returns an array with number of repeatation of the keys with undefined values, like : [,]
        .map((_,index)=>{
            return <BurgerIngredients key={igKey+index} ingredientType={igKey}/>
        })
    })
    .reduce((arr, el)=>{ //used to flatten the array
        return arr.concat(el);
    },[]);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>please add ingredients</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredients ingredientType="bread-top" />
            {transformedIngredients}
            <BurgerIngredients ingredientType="bread-bottom" />
        </div>
    )
};

export default Burger;