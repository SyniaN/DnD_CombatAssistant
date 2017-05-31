import React from 'react';
import PointsOrb from './PointsOrb_PC';
import {getGameState} from '../System/Game';

export default class TestGround extends React.Component {
    
    render(){
        
        var token = getGameState().tokens[1];
        var current = 6;
        var max = 8;
        var color = "blue";
        
        return(
            <PointsOrb current={current} max={max} color={color}></PointsOrb>
        );
    }
} 