import React from 'react';
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

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(e){
		
	}
    
    render(){
    	
    	var configBoxes = [];
    
	    for (var propName in this.state){
			if (propName === "color"){
				continue;
			}
	    	var prop = this.state[propName];
	    	configBoxes.push(
	    		<div key={propName}>
		    		<label>{propName}</label>
		    		<input id={propName} type="text" value={prop} onChange={handleInputChange}/>
	    		</div>
	    	);
	    }
	    
        return(
        	<div>
	            <h2>{this.state.name}</h2>
	            
	            {configBoxes}
            </div>
        );
    }
}