import {React, Component} from 'react';

import Card from '../components/Card/Card';


class Game extends Component {

    render() {
        return(
            <div>
                <Card key="test1" card_text="testing"/>
                <Card key="test2" card_text="testing again"/>
            </div>
        );
    }
}

export default Game;