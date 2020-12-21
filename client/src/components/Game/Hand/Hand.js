import React from 'react';

import Card from '../Card/Card';

const hand = (props) => {

    return(
        <div style={{height: '25%', position: "bottom"}}>
            <Card key="test1" card_text="testing" type="warning"/>
            <Card key="test2" card_text="testing again" type="warning"/>
            <Card key="test3" card_text="warning again" type="warning"/>
            <Card key="test4" card_text="perk again" type="perk"/>
            <Card key="test5" card_text="perk" type="perk"/>
            <Card key="test6" card_text="bruh" type="perk"/>
            <Card key="test7" card_text="ok" type="perk"/>
        </div>
    );

};

export default hand;