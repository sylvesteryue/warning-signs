import React from 'react';

import classes from './Card.module.css';

const card = (props) => {
    
    return(
        <div className={classes.WarningCard} key={props.key}>
            <div>
                <span>
                    {props.card_text}
                </span>
            </div>
        </div>
    );
};

export default card;