import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css'

const controls = [
    {label: 'Meat' , ingredientsType : 'meat'},
    {label: 'Cheese' , ingredientsType : 'cheese'},
    {label: 'Bacon' , ingredientsType : 'bacon'},
    {label: 'Salad' , ingredientsType : 'salad'},

]

const BuildControls = (props) =>(

    <div className={classes.BuildControls}>
        <p>Total price: <strong>{props.price.toFixed(2)}</strong> $</p>
        {controls.map(item=>{
            return <BuildControl
            disabled = {props.disabledIngredients[item.ingredientsType]} 
            removed={() => props.reomoveIngredients(item.ingredientsType)}
            added={() => props.addIngredients(item.ingredientsType)} key={item.label} label={item.label} />
        })}
        <button disabled={!props.purchaseable}
         className={classes.OrderButton}
         onClick={props.order}>ORDER NOW</button>

    </div>
);

export default BuildControls;