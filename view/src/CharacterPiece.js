import React from 'react';
import { selectCharacter, removeCharacter, deselectCharacter, getGameState} from './Game';

export default class CharacterPiece extends React.Component {
    
    handlePieceSelect(key){
        selectCharacter(key);
    }
    
    handlePieceRemove(key){
        deselectCharacter();
        removeCharacter(key);
    }
    
    render(){
        var characterStyle = {
            width: this.props.size?this.props.size:"100%",
            margin: '0',
            backgroundColor: this.props.color,
            borderStyle: 'solid',
            borderWidth: "4px",
            borderColor: getGameState().selectedCharacter===this.props.id?'red':'black',
            padding: '0',
            backgroundImage:"url('/token_icons/"+getGameState().tokens[this.props.id].icon+"')",
            backgroundRepeat:"round",
            height:"100%",
            position:'relative',
            float: 'left'
        };
        
        var lableStyle = {
            backgroundColor: "rgba(240, 240, 240, 0.85)",
            position: "absolute",
            bottom:"0px",
            width: "100%",
            textAlign: "center"
        };
        
        var selectionFieldStyle = {
            position: "absolute",
            bottom:"0px",
            height: "80%",
            width: "100%",
            cursor: 'pointer'
        };
        
        var clickAble = {
            cursor: 'pointer'
        };
        
        return (
            <div style={characterStyle} >
                <span style={clickAble} onClick={()=>this.handlePieceRemove(this.props.id)}> <span className="glyphicon glyphicon-remove pull-right"/> </span>
                <div style={selectionFieldStyle} onClick={()=>this.handlePieceSelect(this.props.id)}>
                    <span style={lableStyle}> {this.props.label}</span>
                </div>
            </div>
        );
    
    }
        
}