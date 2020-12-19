import React from 'react';

import Card from '../Card/Card';

const Table = (props) => {
    return(
        <div>
            <Card key="test1" card_text="testing"/>
            <Card key="test2" card_text="testing again"/>
        </div>
    );
};


export default Table;