import React from 'react';
import MapTile from './MapTile';
import CharacterPiece from './CharacterPiece';
import { movePiece, getGameState } from './Game';

class Map extends React.Component {
    
    
    handleTileClick(x,y){
        movePiece(x,y);
    }
    
    //This renders a piece inside the Tile if the piece's x and y is on this tile.
    renderTile(x, y, key, tileSize, mapOptions){
        
        var pieces=[];
        
        for (var i = 0; i < this.props.playerPieces.length; i++){
                var playerPiece = this.props.playerPieces[i];
                var [pieceX, pieceY] = playerPiece.position;
                if (pieceX === x && pieceY === y){
                    pieces.push(<CharacterPiece key={i} id={playerPiece.id} color={playerPiece.color} label={playerPiece.name}/>);
                }
        }
        
        return (
            <div key={key} onClick={()=>this.handleTileClick(x,y)}>
                <MapTile x={x} y={y} size={tileSize} mapOptions={mapOptions}>
                    {pieces}
                </MapTile>
            </div>
        );
    }
      
    render(){
        
        const mapScale = getGameState().mapScale;
        
    
        const mapStyle = {
            width: mapScale.width + "px",
            padding: "0",
            margin: '0',
            float: 'left',
        };
        
        const imageStyle = {
            width: mapScale.width-(mapScale.width%mapScale.tileSize) + "px",
            float: "left"
        };
        
        const tileArrayStyle = {
            position: "absolute",
            width: mapScale.width-(mapScale.width%mapScale.tileSize) + "px"
        };
        
        var tileArray = [];
        
        for (var i = 0; i < Math.floor(mapScale.height/mapScale.tileSize); i++){
            for(var j = 0; j < Math.floor(mapScale.width/mapScale.tileSize); j++){
                var keyString = i+"-"+j;
                tileArray.push(this.renderTile(j, i, keyString, mapScale.tileSize, this.props.mapOptions));
            }
        }
        
        return (
            <div className="container" style={mapStyle}>
                <img src={this.props.mapUrl} alt="" style={imageStyle} />
                <div style={tileArrayStyle}>
                    {tileArray}
                </div>
            </div>

        );
    }
}

Map.propTypes = {
    playerPieces: React.PropTypes.array.isRequired
};

export default Map;