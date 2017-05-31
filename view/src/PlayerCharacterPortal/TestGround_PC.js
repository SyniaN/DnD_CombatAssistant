import React from 'react';
import ActionBar from './ActionBar_PC';
import {getGameState} from '../System/Game';

export default class TestGround extends React.Component {
    
    render(){
        
        var token = getGameState().tokens[1];
        
        return(
            <ActionBar token={token}></ActionBar>
        );
    }
} 