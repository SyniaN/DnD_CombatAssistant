import React from 'react';
import PlayerMap from './PlayerMap';
import TileMap from './TileMap';
import { getGameState } from './Game';

class Map extends React.Component {
 
    render(){
        
        const overallStyle = this.props.style;

        const mapScale = getGameState().mapScale;
        const mapStyle = {
            width: "2400px",
            height: "1400px",
            paddingLeft: "200px",
            paddingTop: "50px",
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
            <div style={overallStyle}>
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