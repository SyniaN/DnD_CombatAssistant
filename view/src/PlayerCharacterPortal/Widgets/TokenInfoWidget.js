import React from 'react';
import {getGameState} from '../../System/Game';

export default class TokenInfo extends React.Component{
	constructor(props){
		super();
		
		var tokens = getGameState().tokens;
		var token = tokens[props.tokenId];
		console.log('in TokenInfo, token: ' , token);
		
		
		this.state = {
			"gameplayData" : {
				"name": token.name,
				"hp": token.hp,
				"maxHp": token.maxHp,
				"ac": token.ac
			},
			"color": token.color,
			"icon": token.icon
			
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		
		this.setState({
			[name]: value
		});
	}
    
    render(){
    	
    	var configBoxes = [];
    	
    	var photoFrameStyle = {
    		height: "200px",
    		backgroundImage: "url('/token_icons/" + this.state.icon + "')",
    		backgroundSize: "cover"
    	
    	}
    
	    for (var propName in this.state.gameplayData){
	    	var prop = this.state.gameplayData[propName];
	    	configBoxes.push(
	    		<div className="form-group col-sm-12" key={propName}>

		    		<label className="col-sm-3">{propName}</label>
		    		<div className="col-sm-9">
		    			<input name={propName} type="text" value={prop} onChange={this.handleInputChange}/>
	    			</div>
	    		</div>
	    	);
	    }
	    
        return(
        	<div>
	            <h2>{this.state.gameplayData.name}</h2>
	            <div style={photoFrameStyle}>
	    		</div>
	            <form className="form-horizontal">
	            	{configBoxes}
	            </form>
	            
            </div>
        );
    }
}