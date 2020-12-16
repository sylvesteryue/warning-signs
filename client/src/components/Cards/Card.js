import React from 'react';

const card = (props) => {
    
    return(
        <div>
            <div>
                <span>
                    {props.card_text}
                </span>
            </div>
        </div>
    );
};

export default card;