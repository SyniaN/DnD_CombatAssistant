import React from 'react';
import MapTile from './MapTile';
import CharacterPiece from './CharacterPiece';
import { movePiece } from './Game';

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
        
        const MapScale = {
            width: 1700,
            height: 500,
            tileSize: 100
        };
    
        const MapStyle = {
            width: MapScale.width + "px",
            padding: "0",
            margin: '0',
            float: 'left',
        };
        
        const imageStyle = {
            width: MapScale.width-(MapScale.width%MapScale.tileSize) + "px",
            float: "left"
        };
        
        const tileArrayStyle = {
            position: "absolute",
            width: MapScale.width-(MapScale.width%MapScale.tileSize) + "px"
        };
        
        var tileArray = [];
        
        for (var i = 0; i < (MapScale.height/MapScale.tileSize); i++){
            for(var j = 0; j < (MapScale.width/MapScale.tileSize); j++){
                var keyString = i+"-"+j;
                tileArray.push(this.renderTile(j, i, keyString, MapScale.tileSize, this.props.mapOptions));
            }
        }
        
        return (
            <div className="container" style={MapStyle}>
                <img src={this.props.mapUrl} alt="backgroundImage" style={imageStyle} />
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