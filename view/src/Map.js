import React from 'react';
import PlayerMap from './PlayerMap';
import TileMap from './TileMap';
import { getGameState } from './Game';

class Map extends React.Component {
 
    render(){

        const mapScale = getGameState().mapScale;
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
        
        return (
            <div>
                <div className="container content" style={mapStyle}>
                    <img src={this.props.mapUrl} alt="" style={imageStyle} />
                    
                    <TileMap/>
                    <PlayerMap/>
                    
                </div>
            </div>

        );
    }
}

Map.propTypes = {
    playerPieces: React.PropTypes.array.isRequired
};

export default Map;