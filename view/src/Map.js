import React from 'react';
import MapTile from './MapTile';
import CharacterPiece from './CharacterPiece';
import { movePiece, getGameState } from './Game';

class Map extends React.Component {
    
    
    handleTileClick(x,y){
        movePiece(x,y);
    }
    
    //This renders a piece inside the Tile if the piece's x and y is on this tile.
    renderTile(x, y, key, tileSize, mapOptions, fogStatus){
        
        var piecesTemp=[];
        
        for (var i = 0; i < this.props.playerPieces.length; i++){
                var playerPiece = this.props.playerPieces[i];
                var [pieceX, pieceY] = playerPiece.position;
                if (pieceX === x && pieceY === y){
                    piecesTemp.push({
                        key: i,
                        id: playerPiece.id,
                        color: playerPiece.color,
                        label: playerPiece.name
                    })
                   
                }
        }

        var pieces=[];
        for (var j = 0; j < piecesTemp.length; j++){
            var piece = piecesTemp[j];
            pieces.push(<CharacterPiece key={piece.key} id={piece.id} color={piece.color} label={piece.label} size={piecesTemp.length>1?"50%":"100%"}/>);
        }

        return (
            <div key={key} onClick={()=>this.handleTileClick(x,y)}>
                <MapTile x={x} y={y} size={tileSize} mapOptions={mapOptions} fogStatus={fogStatus}>
                    {pieces}
                </MapTile>
            </div>
        );
    }
      
    render(){
        
        const mapScale = getGameState().mapScale;
        const fogStatus = getGameState().fogOfWar.status;
    
        const mapStyle = {
            width: mapScale.width + "px",
            padding: "0",
            marginLeft: '240px',
            float: 'left',
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            UserSelect: "none",
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
                tileArray.push(this.renderTile(j, i, keyString, mapScale.tileSize, this.props.mapOptions, fogStatus[i][j]));
            }
        }
        
        return (
            <div>
                <div className="container content" style={mapStyle}>
                    <img src={this.props.mapUrl} alt="" style={imageStyle} />
                    <div style={tileArrayStyle}>
                        {tileArray}
                    </div>
                </div>
            </div>

        );
    }
}

Map.propTypes = {
    playerPieces: React.PropTypes.array.isRequired
};

export default Map;