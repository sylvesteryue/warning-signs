import React from 'react';

import Card from '../Card/Card';

const Date = (props) => {

    return(
        <div style={{height: "100%"}}>
            <Card key="perk1" card_text="perk" type="perk"/>
            <Card key="perk2" card_text="bruh" type="perk"/>
            <Card key="warning1" card_text="perk" type="warning"/>
        </div>
    );
}


export default Date;