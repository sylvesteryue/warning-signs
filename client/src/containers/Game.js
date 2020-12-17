import {React, Component} from 'react';

import Card from '../components/Game/Card/Card';
import ChatForm from '../components/Chat/ChatForm';
import ChatContainer from '../components/Chat/ChatContainer';


class Game extends Component {

    render() {
        return(
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{width: '75%'}}>
                    <Card key="test1" card_text="testing"/>
                    <Card key="test2" card_text="testing again"/>
                </div>

                <div style={{width: '25%'}}>
                    <ChatContainer/>
                    <ChatForm/>
                </div>
            </div>
        );
    }
}

export default Game;