import React from 'react';
import { addCharacter, deselectCharacter, changeMap, changeMapOptions } from './Game';

export default class SidePanel extends React.Component {
    
    constructor(props){
        super();
        this.state={
            name: '',
            pos: '',
            mapUrl: props.playMap,
            color: '',
            fogOfWar: props.mapOptions.fogOfWar,
            gridLines: props.mapOptions.gridLines,
            gridLabels: props.mapOptions.gridLabels
        };
        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePosChange = this.handlePosChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleAddCharacterSubmit = this.handleAddCharacterSubmit.bind(this);
        
        this.handleMapUrlChange = this.handleMapUrlChange.bind(this);
        this.handleMapSubmit = this.handleMapSubmit.bind(this);
        
        this.handleFogOfWarChange = this.handleFogOfWarChange.bind(this);
        this.handleGridLabelsChange = this.handleGridLabelsChange.bind(this);
        this.handleGridLinesChange = this.handleGridLinesChange.bind(this);
        this.handleOptionSubmit = this.handleOptionSubmit.bind(this);
        
        this.handleClick = this.handleClick.bind(this);
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
        
        this.setState({
            name: '',
            pos: '',
            mapUrl: this.props.playMap,
            color: ''
        });
    }
    
    
    //Map changes
    handleMapUrlChange(event){
        this.setState({mapUrl: event.target.value});
        console.log('mapUrl changed to: ' + event.target.value);
    }
    
    handleMapSubmit(){
        console.log('changing map');
        changeMap(this.state.mapUrl);
    }
    
    //Option changes
    
    handleFogOfWarChange(event){
        this.setState({fogOfWar:event.target.checked});
    }
    
    handleGridLinesChange(event){
        this.setState({gridLines:event.target.checked});
    }
    
    handleGridLabelsChange(event){
        this.setState({gridLabels:event.target.checked});
    } 
    
    handleOptionSubmit(){
        console.log('changing options');
        changeMapOptions({
            fogOfWar: this.state.fogOfWar,
            gridLines: this.state.gridLines,
            gridLabels: this.state.gridLabels
        });
    }
    
    
    //Click event
    handleClick(){
        deselectCharacter();
        console.log('deselecting');
    }
    
    render(){
        var panelStyle = {
            width: "200px",
            height: "100vh",
            float: 'left',
            padding: '10px'
        };
        return(
            <div style={panelStyle} onClick={this.handleClick}>
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
                    
                    <h2>Map</h2>
                    <div>
                        <div className="form-group">
                            <h3>Image Url</h3>
                            <input type="text" className="form-control" placeholder="Map URL" value={this.state.mapUrl} onChange={this.handleMapUrlChange}/>
                        </div>
                        <button className="btn btn-default" onClick={this.handleMapSubmit}>Submit</button>
                    </div>
                    <hr/>
                    
                    <h2>Options</h2>
                    <div>
                        <div className="checkbox"> 
                            <label>
                                <input type="checkbox" checked={this.state.fogOfWar} onChange={this.handleFogOfWarChange}/> Fog of war
                            </label>
                        </div>
                        
                        <div className="checkbox"> 
                            <label>
                                <input type="checkbox" checked={this.state.gridLines} onChange={this.handleGridLinesChange}/> Grid Lines
                            </label>
                        </div>
                        
                        <div className="checkbox"> 
                            <label>
                                <input type="checkbox" checked={this.state.gridLabels} onChange={this.handleGridLabelsChange}/> Grid labels
                            </label>
                        </div>
                        <button className="btn btn-default" onClick={this.handleOptionSubmit}>Submit</button>
                    </div>
            </div>
                
        );
    }
}