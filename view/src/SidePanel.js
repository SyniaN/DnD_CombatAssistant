import React from 'react';
import { addCharacter, deselectCharacter, changeMap } from './Game';

export default class SidePanel extends React.Component {
    
    constructor(props){
        super();
        this.state={
            name: '',
            posX: '',
            posY: '',
            mapUrl: props.playMap
        };
        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePosXChange = this.handlePosXChange.bind(this);
        this.handlePosYChange = this.handlePosYChange.bind(this);
        this.handleAddCharacter = this.handleAddCharacter.bind(this);
        this.handleMapUrlChange = this.handleMapUrlChange.bind(this);
        this.handleMapChange = this.handleMapChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleNameChange(event){
        this.setState({name: event.target.value});
        console.log('name changed to: ' + event.target.value);
    }
    
    handlePosXChange(event){
        this.setState({posX: event.target.value});
        console.log('posX changed to: ' + event.target.value);
    }
    
    handlePosYChange(event){
        this.setState({posY: event.target.value});
        console.log('posY changed to: ' + event.target.value);
    }
    
    handleAddCharacter(){
        console.log('submitting: ' + this.state);
        
        addCharacter({
            name: this.state.name,
            position:[Number(this.state.posX), Number(this.state.posY)]
        });
        
        this.setState({
            name: '',
            posX: '',
            posY: '',
            mapUrl: this.props.playMap
        });
    }
    
    handleMapUrlChange(event){
        this.setState({mapUrl: event.target.value});
        console.log('mapUrl changed to: ' + event.target.value);
    }
    
    handleMapChange(){
        console.log('changing map');
        changeMap(this.state.mapUrl);
    }
    
    handleClick(){
        deselectCharacter();
        console.log('deselecting');
    }
    
    render(){
        var panelStyle = {
            width: "300px",
            height: "100vh",
            float: 'left',
        };
        return(
            <div style={panelStyle} onClick={this.handleClick}>
                    <h2>Add Character</h2>
                    <form>
                      <div className="form-group">
                        
                        <h3>Name</h3>
                        <input type="text" className="form-control" placeholder="Bob" value={this.state.name} onChange={this.handleNameChange}/>
                      </div>
                      <div className="form-group">
                        <h3>Position</h3>
                        <input type="text" className="form-control" placeholder="X Position" value={this.state.posX} onChange={this.handlePosXChange}/>
                        <input type="text" className="form-control" placeholder="Y Position" value={this.state.posY} onChange={this.handlePosYChange}/>
                      </div>
                      <button type="submit" className="btn btn-default" onClick={this.handleAddCharacter}>Submit</button>
                    </form>
                    
                    <h2>Change Map</h2>
                    <form>
                        <div className="form-group">
                            <h3>Map</h3>
                            <input type="text" className="form-control" placeholder="Map URL" value={this.state.mapUrl} onChange={this.handleMapUrlChange}/>
                        </div>
                        <button type="submit" className="btn btn-default" onClick={this.handleMapChange}>Submit</button>
                    </form>
                    
                    
            </div>
                
        );
    }
}