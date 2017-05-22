import React from 'react';
import { addToken} from '../../System/Game';

export default class AddTokenWidget extends React.Component {
    constructor(){
        super();
        this.state={
            name: '',
            pos: '',
            color: '',
            height: '',
            width: ''
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleAddCharacterSubmit = this.handleAddCharacterSubmit.bind(this);
    }

    handleFieldChange(event){

        switch (event.target.id){
            case "name":
                this.setState({name: event.target.value});
                break;
            case "height":
                this.setState({height: event.target.value});
                break;
            case "width":
                this.setState({width: event.target.value});
                break;
            case "pos":
                this.setState({pos: event.target.value});
                break;
            case "color":
                this.setState({color: event.target.value});
                break;
            default:
                break;
        }
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
        
        addToken({
            name: this.state.name,
            position:[Number(posX), Number(posY)],
            color: this.state.color,
            height: this.state.height,
            width: this.state.width
        });
        
        this.state={
            name: '',
            pos: '',
            color: '',
            height: '',
            width: ''
        };
    }
    
    render(){
        return(
            <div>
                <h2>Add Token</h2>
                
                <div>
                    <div className="form-group">
                        <h3>Name</h3>
                        <input type="text" id="name" className="form-control" placeholder="eg. Bob" value={this.state.name} onChange={this.handleFieldChange}/>
                    </div>

                    <div className="form-group">
                        <h3>Height</h3>
                        <input type="text" id="height" className="form-control" placeholder="eg. 60px" value={this.state.height} onChange={this.handleFieldChange}/>
                    </div>

                    <div className="form-group">
                        <h3>Width</h3>
                        <input type="text" id="width" className="form-control" placeholder="eg. 60px" value={this.state.width} onChange={this.handleFieldChange}/>
                    </div>
                      
                    <div className="form-group">
                        <h3>Position</h3>
                        <input type="text" id="pos" className="form-control" placeholder="eg. B3" value={this.state.pos} onChange={this.handleFieldChange}/>
                    </div>
                      
                    <div className="form-group">
                        <h3>Color</h3>
                        <input type="text" id="color" className="form-control" placeholder="eg. yellow OR #4286f4" value={this.state.color} onChange={this.handleFieldChange}/>
                    </div>
                      
                    <button type="submit" className="btn btn-default" onClick={this.handleAddCharacterSubmit}>Submit</button>
                </div>
                
                <hr/>
            </div>
        );
    }
}