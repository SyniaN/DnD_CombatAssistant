import React from 'react';
import { addToken} from '../../System/Game';

export default class AddTokenWidget extends React.Component {
    constructor(props){
        super(props);
        this.state={
            tokenType: "",
		    positionX: "",
		    positionY: "",
		    color: "",
		    icon: "",
		    width: "",
		    height: "",
		    name: "",
		    hp: "",
		    hpMax: "",
		    mp: "",
		    mpMax: "",
		    ac: ""
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleAddToken = this.handleAddToken.bind(this);
    }

    handleFieldChange(event){
        this.setState({ [event.target.name] : event.target.value});
    }
    
    handleAddToken(){
        
        var tokenToAdd = Object.assign({}, this.state);
        addToken(tokenToAdd);
        
        this.setState({tokenType: "",
		    positionX: "",
		    positionY: "",
		    color: "",
		    icon: "",
		    width: "",
		    height: "",
		    name: "",
		    hp: "",
		    hpMax: "",
		    mp: "",
		    mpMax: "",
		    stamina:"",
		    staminaMax:"",
		    ac: ""});
    }
    
    render(){
        
        var configBoxes=[];
        for (var propName in this.state){
	    	configBoxes.push(
	    		<div key={propName}>
		    		<label>{propName}</label>
		    		<div>
		    			<input name={propName} type="text" value={this.state[propName]} onChange={this.handleFieldChange}/>
	    			</div>
	    		</div>
	    	);
	    }
        
        return(
            <div>
                <h2>Add Token</h2>
                {configBoxes}
                <button type="submit" className="btn btn-default" onClick={this.handleAddToken}>Submit</button>
                <hr/>
            </div>
        );
    }
}