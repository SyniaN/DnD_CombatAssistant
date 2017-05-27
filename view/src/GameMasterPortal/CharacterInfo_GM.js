import React from 'react';
import {editToken} from '../System/Game';

export default class CharacterInfo extends React.Component{
    
    constructor(props){
        super();
        this.sendChangesToGameState = this.sendChangesToGameState.bind(this);
        this.updateLocalState = this.updateLocalState.bind(this);
        this.state = props.char.alerts;
    }
    
    componentWillReceiveProps(nextProps){
        console.log('nextProps', nextProps);
        this.setState(nextProps.char.alerts);
    }
    
    sendChangesToGameState(){
        var newToken = {
            ...this.props.char,
            alerts: this.state
        }

        editToken(newToken);
    }
    
    updateLocalState(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){

        const overallStyle = {
            height: "125px",
            width: "300px",
            float: "right",
            marginBottom: "5px"
        };
        
        const photoHalf= {
            width:"100px",
            height:"100%",
            backgroundColor: this.props.char.color,
            float:"left",
            border: "3px solid rgb(200, 200, 200)",
            textShadow: "0px 0px 3px rgb(200, 200, 200)"
        }
        
        const textHalf = {
            width: "200px",
            height: "100%",
            float:"left",
            color: 'rgb(20, 20, 20)',
            paddingRight: "10px",
            textShadow: "0px 0px 5px #000000"
        };

        const photoStyle = {
            width: "100%",
            height: "85%",
            backgroundImage: "url('/token_icons/"+this.props.char.icon+"')",
            backgroundSize: "cover",
            float: "left"
        };

        const statsStyle = {
            float: "left",
            width: "100%",
            textAlign: "right"
        };

        return(
            <div style={overallStyle}>
            
                <div id="text" style={textHalf} >
                    <div style={statsStyle}>
                        <div onBlur={this.sendChangesToGameState}>
                            <input type="text" name="alert1" value={this.state.alert1} onChange={this.updateLocalState}/>
                            <input type="text" name="alert2" value={this.state.alert2} onChange={this.updateLocalState}/>
                            <input type="text" name="alert3" value={this.state.alert3} onChange={this.updateLocalState}/>
                            <input type="text" name="alert4" value={this.state.alert4} onChange={this.updateLocalState}/>
                        </div>
                        
                    </div>
                </div>
            
                <div id="icon" style={photoHalf} >
                    <div style={photoStyle}>
                        
                    </div>
                    <p><label>HP: </label> {this.props.char.stats.hp.value}/{this.props.char.stats.maxHp.value}</p>
                </div>
                
            </div>
        )
    }
}

CharacterInfo.propTypes = {
    char: React.PropTypes.object.isRequired
};