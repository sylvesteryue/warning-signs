import {React, Component} from 'react';

import Card from '../components/Card/Card';


class Game extends Component {

    render() {
        return(
            <div>
                <Card key="test" card_text="testing"/>
            </div>
        );
    }
}

export default Game;