import React from 'react';
import { addCharacter} from '../Game';

export default class AddTokenWidget extends React.Component {
    constructor(){
        super();
        this.state={
            name: '',
            pos: '',
            color: '',
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePosChange = this.handlePosChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleAddCharacterSubmit = this.handleAddCharacterSubmit.bind(this);
    }
    
    //Character changes
    handleNameChange(event){
        this.setState({name: event.target.value});
        console.log('name field changed to: ' + event.target.value);
    }
    
    handlePosChange(event){
        this.setState({pos: event.target.value});
        console.log('pos field changed to: ' + event.target.value);
    }
    
    handleColorChange(event){
        this.setState({color: event.target.value});
        console.log('color field changed to: ' + event.target.value);
    }
    
    handleAddCharacterSubmit(){
        console.log('submitting: ' + this.state);
        var letters=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        
        var posXLetter = this.state.pos[0];
        var posY = this.state.pos.substring(1, this.state.pos.length);
        var posX = 0;
        for (var i = 0; i < letters.length; i++){
            if(letters[i]===posXLetter){
                posX = i;
                break;
            }
        }
        
        addCharacter({
            name: this.state.name,
            position:[Number(posX), Number(posY)],
            color: this.state.color
        });
        
        this.state={
            name: '',
            pos: '',
            color: '',
        };
    }
    
    render(){
        return(
            <div>
                <h2>Add Token</h2>
                    <div>
                      <div className="form-group">
                        
                        <h3>Name</h3>
                        <input type="text" className="form-control" placeholder="eg. Bob" value={this.state.name} onChange={this.handleNameChange}/>
                      </div>
                      
                      <div className="form-group">
                        <h3>Position</h3>
                        <input type="text" className="form-control" placeholder="eg. B3" value={this.state.pos} onChange={this.handlePosChange}/>
                      </div>
                      
                      <div className="form-group">
                        <h3>Color</h3>
                        <input type="text" className="form-control" placeholder="eg. yellow OR #4286f4" value={this.state.color} onChange={this.handleColorChange}/>
                      </div>
                      
                      <button type="submit" className="btn btn-default" onClick={this.handleAddCharacterSubmit}>Submit</button>
                    </div>
                    <hr/>
            </div>
        );
    }
}