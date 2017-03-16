import React from 'react';
import MapTile from './MapTile';
import CharacterPiece from './CharacterPiece';
import { movePiece } from './Game';

class Map extends React.Component {
    
    handleTileClick(x,y){
        movePiece(x,y);
    }
    
    //This renders a piece inside the Tile if the piece's x and y is on this tile.
    renderTile(x, y, key){
        
        var pieces=[];
        
        for (var i = 0; i < this.props.playerPieces.length; i++){
                var playerPiece = this.props.playerPieces[i];
                var [pieceX, pieceY] = playerPiece.position;
                if (pieceX === x && pieceY === y){
                    pieces.push(<CharacterPiece key={i} id={playerPiece.id} label={playerPiece.name}/>);
                }
        }
        
        return (
            <div key={key} onClick={()=>this.handleTileClick(x,y)}>
                <MapTile >
                    {pieces}
                </MapTile>
            </div>
        );
    }
      
    render(){
    
        const MapStyle = {
            width: "1600px",
            height: "1600px",
            padding: "0",
            margin: '0',
            float: 'left',
            backgroundImage: "url('"+this.props.playMap+"')"
        };
        
        var tileArray = [];
        
        
        
        for (var i = 0; i < 16; i++){
            for(var j = 0; j < 16; j++){
                var keyString = i+"-"+j;
                tileArray.push(this.renderTile(j, i, keyString));
            }
        }
        
        return (
            <div className="container" style={MapStyle}>
                {tileArray}
            </div>

        );
    }
}

Map.propTypes = {
    playerPieces: React.PropTypes.array.isRequired
};

export default Map;