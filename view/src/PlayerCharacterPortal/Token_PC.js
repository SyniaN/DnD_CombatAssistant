import React from 'react';
import { selectCharacter, removeToken, movePiece, deselectCharacter, getGameState, deselectFogger} from '../System/Game'
import { getLocalState } from '../System/Game_Local'; 

export default class Token extends React.Component {

    constructor(props){
        super(props);

        this.handleKeyPress= this.handleKeyPress.bind(this);
    }

    componentDidMount(){
        this.container.focus(); 
    }

    handleKeyPress(event){
        event.preventDefault();
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
    
    handlePieceSelect(e, key){
        e.stopPropagation();
        deselectFogger();
        deselectCharacter();
        selectCharacter(key);
    }
    
    handlePieceRemove(key){
        deselectCharacter();
        removeToken(key);
    }
    
    render(){
        var characterStyle = {
            width: this.props.size?this.props.size:"100%",
            margin: '0',
            backgroundColor: this.props.color,
            borderStyle: 'solid',
            borderWidth: getLocalState().selectedCharacter===this.props.id?'3px':'2px',
            borderColor: getLocalState().selectedCharacter===this.props.id?'#ffa62b':'black',
            padding: '0',
            backgroundImage:"url('/token_icons/"+getGameState().tokens[this.props.id].icon+"')",
            backgroundSize:"cover",
            backgroundPosition:"0px -5px",
            height: this.props.size?this.props.size:"100%",
            position:'relative',
            float: 'left',
            boxShadow: "0px 15px 30px #111222"
        };
        
        var lableStyle = {
            backgroundColor: "rgba(240, 240, 240, 0.85)",
            position: "absolute",
            bottom:"0px",
            width: "100%",
            maxHeight: "96%",
            textAlign: "center",
            overflow: "hidden",
            fontSize: "75%"
        };
        
        var selectionFieldStyle = {
            position: "absolute",
            bottom:"0px",
            height: "100%",
            width: "100%",
            cursor: 'pointer'
        };
        
        var clickAble = {
            cursor: 'pointer'
        };

        //no remove button if the token is a player
        var removeButton = getGameState().tokens[this.props.id].tokenType === "player" ? <span/> : <span style={clickAble}  onClick={()=>this.handlePieceRemove(this.props.id)}> <span className='glyphicon glyphicon-remove pull-right'/> </span>;

        return (
            <div ref={(div) => { this.container = div }}  tabIndex={this.props.id} onKeyDown={this.handleKeyPress} style={characterStyle} >
                
                <div style={selectionFieldStyle} onClick={(e)=>this.handlePieceSelect(e, this.props.id)}>
                    <span style={lableStyle}> {this.props.label}</span>
                </div>

                {removeButton}

            </div>
        );
    
    }
        
}