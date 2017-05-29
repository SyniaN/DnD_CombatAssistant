import React from 'react';
import CharacterInfo from './CharacterInfo_PC';
import {getGameState} from '../System/Game';

export default class TestGround extends React.Component {
    
    render(){
        
        var token = getGameState().tokens[2];
        
        return(
            <CharacterInfo char={token}></CharacterInfo>
        );
    }
} 