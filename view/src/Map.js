import React from 'react';
import PlayerMap from './PlayerMap';
import TileMap from './TileMap';
import { getGameState } from './Game';

class Map extends React.Component {
 
    render(){

        const mapScale = getGameState().mapScale;
        const mapStyle = {
            width: "3000px",
            height: "2000px",
            padding: "300px",
            backgroundColor: "grey",
            float: 'left',
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            UserSelect: "none"
        };
        
        const imageStyle = {
            width: mapScale.width-(mapScale.width%mapScale.tileSize) + "px",
            float: "left"
        };
        
        return (
            <div>
                <div className="container content" style={mapStyle}>
                    <div>
                        <img src={this.props.mapUrl} alt="" style={imageStyle} />
                        
                        <TileMap/>
                        <PlayerMap/>
                    </div>
                    
                </div>
            </div>

        );
    }
}

export default Map;