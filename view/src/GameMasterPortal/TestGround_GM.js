import React from 'react';
import CharacterInfo from './CharacterInfo_GM';
import {getGameState} from '../System/Game';

export default class TestGround extends React.Component {
    
    render(){
        
        var token = getGameState().tokens[1];
        
        return(
            <CharacterInfo char={token}></CharacterInfo>
        );
    }
} 