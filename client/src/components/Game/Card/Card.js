import React, {useState} from 'react';
import cx from 'classnames';

import classes from './Card.module.css';

const Card = (props) => {

    const [isHighlighted, setHighlightState] = useState(false);

    function highlightCard(e) {
        //e.target.style.outline = '5px solid yellow';
        //e.target.style.boxShadow= 'rgb(204, 204, 136) 0px 0px 10px 10px';

        setHighlightState(true);
    }

    function unHighlightCard(e) {
        //e.target.style.boxShadow = 'none';

        setHighlightState(false);
    }
    
    let classNames = cx(props.type === "warning" ? classes.WarningCard : classes.PerkCard, isHighlighted ? classes.Highlighted : null)
    //fix later
    return(
        <div className={classNames} onMouseEnter={highlightCard} onMouseLeave={unHighlightCard}>
                <span>
                    {props.card_text}
                </span>
        </div>
    );
};

export default Card;