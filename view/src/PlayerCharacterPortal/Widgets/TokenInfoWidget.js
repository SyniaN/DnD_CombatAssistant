import React from 'react';
import {editToken} from '../../System/Game';

export default class TokenInfo extends React.Component{
	constructor(props){
		super();
		
		var token = props.token;	
		
		this.state = {
			"stats" : token.stats,
			"color": token.color,
			"icon": token.icon			
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.sendChangeToGameState = this.sendChangeToGameState.bind(this);
		this.turnRedIfDirty = this.turnRedIfDirty.bind(this);
	}
	
	componentWillReceiveProps(nextProps){
		var token = nextProps.token;
        this.setState({
			"stats" : token.stats,
			"color": token.color,
			"icon": token.icon			
		});
    }
	
	sendChangeToGameState(){
		var sendObj = {
			...this.props.token,
			...this.state
		};
		
		editToken(sendObj);
	}

	handleInputChange(event) {
		const target = event.target;		
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		
		this.setState({
			stats:{				
				...this.state.stats,
				[name]: {
					...this.state.stats[name],
					value : value
				} 
			}
		});
	}
	
	turnRedIfDirty(id){
        if (this.state.gameplayData[id] === this.props.token[id]){
            return {backgroundColor: "white"};
        } else {
            return {backgroundColor: "red"};
        }
    }
    
    render(){
    	console.log('rendering TokenInfo Widget');   	
    	
    	var imageStyle = {
			backgroundImage: "url('/token_icons/" + this.state.icon + "')",
			backgroundSize : "cover",
			height: "100%",
			width:"100%",
			margin: "auto"
		}

		var imageHolderStyle = {
			height: "150px",
			width: "150px",
			margin: "15px auto",
			backgroundColor: this.state.color,
			padding: "10px",
			border: "solid rgb(200,200,200) 6px"
		}
    
    	var configBoxes = [];
    
	    for (var propName in this.state.stats){
	    	configBoxes.push(
	    		<div key={propName}>
		    		<label>{this.state.stats[propName].displayName}</label>
		    		<div>
		    			<input name={propName} type="text" value={this.state.stats[propName].value} onChange={this.handleInputChange}/>
	    			</div>
	    		</div>
	    	);
	    }
	    
        return(
        	<div onBlur={this.sendChangeToGameState}>
				<div style={imageHolderStyle}>
					<div style={imageStyle}></div>
				</div>

	            <form className="form-horizontal">
	            	{configBoxes}
	            </form>
	            
            </div>
        );
    }
}