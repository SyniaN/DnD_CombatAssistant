import React from 'react';
import { selectCharacter, removeCharacter, movePiece, deselectCharacter, getGameState} from './Game';

export default class CharacterPiece extends React.Component {

    constructor(){
        super();

        this.handleKeyPress= this.handleKeyPress.bind(this);
    }

    componentDidMount(){
        this.container.focus(); 
    }

    handleKeyPress(event){
        var posX = getGameState().tokens[this.props.id].position[0];
        var posY = getGameState().tokens[this.props.id].position[1];

        console.log('posX: ' + posX);

        switch(event.key){
            case "ArrowRight":
                posX = ++posX;
                console.log('posX changed to: ' + posX);
                break;
            case "ArrowLeft":
                posX = posX > 0 ? --posX : posX;
                break;
            case "ArrowUp":
                posY = posY > 0 ? --posY : posY;
                break;
            case "ArrowDown":
                posY = ++posY;
                break;
            default:
                break;
        }

        movePiece(posX, posY);
    }
    
    handlePieceSelect(key){
        deselectCharacter();
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
            height: this.props.size?this.props.size:"100%",
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
            <div ref={(div) => { this.container = div }}  tabIndex={this.props.id} onKeyUp={this.handleKeyPress} style={characterStyle} >
                <span style={clickAble}  onClick={()=>this.handlePieceRemove(this.props.id)}> <span className="glyphicon glyphicon-remove pull-right"/> </span>
                <div style={selectionFieldStyle} onClick={()=>this.handlePieceSelect(this.props.id)}>
                    <span style={lableStyle}> {this.props.label}</span>
                </div>
            </div>
        );
    
    }
        
}