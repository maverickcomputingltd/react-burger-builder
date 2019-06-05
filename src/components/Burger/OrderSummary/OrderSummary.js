import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (<li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}:</span>{props.ingredients[igKey]}</li>)
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <button onClick={}>CANCEL</button>
            <button onClick={}>CONTINUE</button>
        </Aux>
    );
};

export default orderSummary;