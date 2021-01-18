import {React, useState} from 'react';
import {Button} from '@material-ui/core';

import Card from '../Card/Card';

const Hand = (props) => {

    //const [selectedCards, setSelectedCards] = useState([]);

    

    return(
        <div>
            <p>Select 2 perks and 1 warning card</p>
            <div style={{display: "flex"}}>
                <Card key="test1" card_text="testing" type="warning"/>
                <Card key="test2" card_text="testing again" type="warning"/>
                <Card key="test3" card_text="warning again" type="warning"/>
                <Card key="test4" card_text="perk again" type="perk"/>
                <Card key="test5" card_text="perk" type="perk"/>
                <Card key="test6" card_text="bruh" type="perk"/>
                <Card key="test7" card_text="ok" type="perk"/>

                <Button variant="contained" color="primary">Choose</Button>
            </div>
        </div>
        
    );

};

export default Hand;