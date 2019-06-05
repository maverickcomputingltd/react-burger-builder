import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

const burger =  (props) => {

    

    const transformedIngredients = Object.keys(props.ingredients);

    const test1 = [Array(props.ingredients)];


    let transformedIngredients2 = transformedIngredients.map(function(igKey, index, origArray) {
        console.log(index);
        console.log(origArray);
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    }).reduce( (arr, el) => {
        return arr.concat(el);
    }, []);

    if(transformedIngredients2.length === 0){
        transformedIngredients2 = <p>Please start adding ingredients</p>
    }
    console.log(transformedIngredients2);


    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients2}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;