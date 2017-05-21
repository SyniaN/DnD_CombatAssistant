import React from 'react';
import Tile from './Tile_GM';
import {getGameState} from '../System/Game'

export default class TileMap extends React.Component{

    //This renders a piece inside the Tile if the piece's x and y is on this tile.
    renderTile(x, y, key, tileSize, mapOptions, fogStatus){
        return (
            <div key={key}>
                <Tile x={x} y={y} size={tileSize} mapOptions={mapOptions} fogStatus={fogStatus}/>
            </div>
        );
    }

    render(){

        const mapScale = getGameState().mapScale;
        const fogStatus = getGameState().fogOfWar.status;
        const mapOptions = getGameState().mapOptions;
    


        const tileArrayStyle = {
            position: "absolute",
            width: mapScale.width-(mapScale.width%mapScale.tileSize) + "px"
        };

        var tileArray = [];
        
        for (var i = 0; i < Math.floor(mapScale.height/mapScale.tileSize); i++){
            for(var j = 0; j < Math.floor(mapScale.width/mapScale.tileSize); j++){
                var keyString = i+"-"+j;
                tileArray.push(this.renderTile(j, i, keyString, mapScale.tileSize, mapOptions, fogStatus[i][j]));
            }
        }

        return(
            <div style={tileArrayStyle}>
                {tileArray}
            </div>
        )
    }

}