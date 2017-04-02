import React from 'react';
import {getGameState, activateFogger, deactivateFogger, changeFogStatus} from './Game';

export default class MapTile extends React.Component {
    
    constructor(props){
        super();
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }
    
    handleMouseDown(event){
        
        if(getGameState().fogOfWar.foggerSelected){
            activateFogger();
        }
        this.handleMouseOver();
    }
    
    handleMouseUp(event){
        if(getGameState().fogOfWar.foggerSelected){
            deactivateFogger();
        }
    }
    
    handleMouseOver(){
        //event.preventDefault();

        console.log('mouseOverTile');

        
        var fogOfWarState = getGameState().fogOfWar;
        
        if (this.props.mapOptions.fogOfWar && fogOfWarState.foggerSelected && fogOfWarState.inAction){
            console.log('Changing tile fog state');
            if(fogOfWarState.foggerMode === "Remove"){
                console.log('Tile fog set to false');
                changeFogStatus(this.props.y, this.props.x, false);
                console.log('Tile x: ' + this.props.x+ ", " + this.props.y +' fog set to false');
                //this.setState({fogOfWar: false});
            } else {
                changeFogStatus(this.props.y, this.props.x, true);
                console.log('Tile x: ' + this.props.x+ ", " + this.props.y +' fog set to true');
                //this.setState({fogOfWar: true});
            }
        }
    }
    
    render(){
        
        var letters=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var fogThisTile=this.props.fogStatus && this.props.mapOptions.fogOfWar 
        var divStyle = {
            width: this.props.size+'px',
            height: this.props.size+'px',
            borderStyle: this.props.mapOptions.gridLines?'inset':null,
            borderWidth: this.props.mapOptions.gridLines?'0.5px':null,
            borderColor: "rgba(160, 160, 160, 0.4)",
            float: 'left',
            backgroundColor: fogThisTile?'grey':null
        };
        
        var labelStyle = {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            display: this.props.mapOptions.gridLabels?'':'none',
            position: "absolute",
            zIndex: "20"
        };

        var playerHolderStyle = {
            float: "null",
            width: "100%",
            height: "100%"
        };
        
        return (
            <div style={divStyle} onMouseUp={this.handleMouseUp} onMouseDown={this.handleMouseDown} onMouseOver={this.handleMouseOver}> 
                <label style={labelStyle}>{letters[this.props.x]}{this.props.y}</label>
                <div style={playerHolderStyle}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
