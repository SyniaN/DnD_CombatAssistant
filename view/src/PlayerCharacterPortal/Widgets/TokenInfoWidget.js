import React from 'react';

import AvatarSelection from './AvatarSelection_PC';
import {getLocalState} from '../../System/Game_Local';
import {getGameState} from '../../System/Game';

export default class TokenInfo extends React.Component{
	constructor(props){
		super();
		
		var tokens = getGameState().tokens;
		var token = tokens[props.tokenId];
		console.log('in TokenInfo, token: ' , token);
		
		
		this.state = {
			"name": token.name,
			"color": token.color,
			"icon": token.icon,
			"hp": token.hp,
			"maxHp": token.maxHp,
			"ac": token.ac
		};
		
		this.incrementAvatar = this.incrementAvatar.bind(this);
		this.decrementAvatar = this.decrementAvatar.bind(this);
	}
	
	incrementAvatar() {
		var iconArray = getLocalState().icons;
		var index = iconArray.indexOf(this.state.icon);
		var iconCount = iconArray.length;
		
        if (index < iconCount-1) {
            index++;
        } else {
            index = 0;
        }
        
        var newIcon = iconArray[index];
        
        this.setState({ icon: newIcon });
    }
    
    decrementAvatar() {
		var iconArray = getLocalState().icons;
		var index = iconArray.indexOf(this.state.icon);
		var iconCount = iconArray.length;
		
        if (index > 0) {
            index--;
        } else {
            index = iconCount - 1;
        }
        
        var newIcon = iconArray[index];
        
        this.setState({ icon: newIcon });
    };
    
 
    /*
    <label>Email</label>
    <input id="Email" type="text"/>
    
    <label>Email</label>
    <input id="Email" type="text"/>
    
    <label>Email</label>
    <input id="Email" type="text"/>
	*/
    
    render(){
    	
    	var configBoxes = [];
    
	    for (var propName in this.state){
	    	var prop = this.state[propName];
	    	configBoxes.push(
	    		<div>
		    		<label>{propName}</label>
		    		<input id={propName} type="text" value={prop}/>
	    		</div>
	    	);
	    }
	    
        return(
        	<div>
	            <h2>{this.state.name}</h2>
	            <AvatarSelection incrementAvatar={this.incrementAvatar} decrementAvatar={this.decrementAvatar} icon={this.state.icon}/>
	            {configBoxes}
            </div>
        );
    }
}