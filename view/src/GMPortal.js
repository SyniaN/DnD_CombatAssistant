import React from 'react';
import Map from './Map';
import GMSidePanel from './GMSidePanel';
import BottomPanel from './BottomPanel';
import {getGameState} from './Game';


class GMPortal extends React.Component{

    render(){

        var tokens = getGameState().tokens;
        var playMap = getGameState().playMap;
        var mapOptions = getGameState().mapOptions;
        
        var mapMargin = {
        }

        return(
            <div>
                <GMSidePanel mapUrl={playMap} mapOptions={mapOptions} />
                
                <Map style={mapMargin}  playerPieces={tokens} mapUrl={playMap} mapOptions={mapOptions} />
                <BottomPanel tokens={tokens} />
            </div>
        )
    }
}

export default GMPortal;