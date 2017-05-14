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

        return(
            <div>
                <GMSidePanel mapUrl={playMap} mapOptions={mapOptions} />
                
                <Map playerPieces={tokens} mapUrl={playMap} mapOptions={mapOptions} />
                <BottomPanel tokens={tokens} />
            </div>
        )
    }
}

export default GMPortal;