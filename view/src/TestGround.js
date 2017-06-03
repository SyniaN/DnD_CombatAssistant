import React from 'react';
import {initialTokenState, tokensReducer} from './System/Reducers';
import {addToken, removeToken} from './System/ActionCreators';

export default class TestGround extends React.Component{
    render(){
        console.log(initialTokenState);
        var action = addToken(
            "uuid", "tokenType", "positionX", "positionY",
            "color", "icon", "width", "height",
            "name", "hp", "hpMax", "mp", "mpMax", "experience",
            "experienceMax", "ac"
        )
        console.log("modified", tokensReducer(initialTokenState, action));
        var action2 = removeToken("0");
        console.log("modified2", tokensReducer(initialTokenState, action2));
        return(<p>loaded</p>);
    }
}