import React from 'react';
import {editToken} from './Game';

export default class CharacterInfo extends React.Component{
    constructor(props){
        super(props);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.findBackgroundColor = this.findBackgroundColor.bind(this);
        this.state = props.char;
    }
    
    componentWillReceiveProps(nextProps){
        this.setState(nextProps.char);
    }


    handleFieldChange(e){
        var nextState = this.state;
        nextState[e.target.id] = e.target.value;
        this.setState(nextState);     
    }

    handleBlur(){
        editToken(this.state);
    }

    findBackgroundColor(id){
        if (id === "notes"){
            return {
                height: "100%",
                width:"100%",
                float: "right",
                backgroundColor: this.props.char.notes === this.state.notes ? "white" : "red"
            }
        }

        if (this.state[id] === this.props.char[id]){
            return {backgroundColor: "white", width: "30%"}
        } else {
            return {backgroundColor: "red", width: "30%"}
        }
    }

    render(){

        const charInfoStyle = {
            height: "150px",
            width: "200px",
            backgroundColor: 'white',
            padding: '5px',
            float: "left",
            marginRight: "5px",
            boxShadow: "15px 15px 10px rgba(20, 20, 20, 0.6)"
        }

        const topHalfStyle = {
            height: "45%"
        }
        const bottomHalfStyle = {
            height: "40%",
            paddingTop: "5px"
        }

        const photoStyle = {
            height: "95%",
            width: "32%",
            backgroundImage: "url('/token_icons/"+this.props.char.icon+"')",
            backgroundSize: "cover",
            float: "left"
        }

        const statsStyle = {
            float: "left",
            height: "100%"
        }

        return(
            <div style={charInfoStyle} onBlur={this.handleBlur}>
                <h4 style={{margin:"0"}}>{this.state.name}</h4>
                <div id="topHalf" style={topHalfStyle}>
                    <div style={photoStyle}></div>
                    <div style={statsStyle}>
                        <div>
                            <label>HP</label> 
                            <input size="1" style={this.findBackgroundColor("hp")} id="hp" type="text" value={this.state.hp} onChange={this.handleFieldChange}/> / <input size="1" style={this.findBackgroundColor("maxHp")} id="maxHp" type="text" value={this.state.maxHp} onChange={this.handleFieldChange}/>
                        </div>
                        <div>
                            <label>Armor</label> 
                            <input size="4" style={this.findBackgroundColor("ac")} id="ac" type="text" value={this.state.ac} onChange={this.handleFieldChange}/>
                        </div>
                    </div>
                </div>
                
                <div id="bottomHalf" style={bottomHalfStyle}>
                    
                    <textarea id="notes" style={this.findBackgroundColor("notes")} value={this.state.notes} onChange={this.handleFieldChange}/>
                </div>

            </div>
        )
    }
}

CharacterInfo.propTypes = {
    char: React.PropTypes.object.isRequired
};