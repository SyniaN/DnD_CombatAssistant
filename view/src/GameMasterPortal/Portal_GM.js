import React from 'react';
import Map from './Map_GM';
import SidePanel from './SidePanel_GM';
import CharInfoPanel from './CharInfoPanel_GM';
import {getGameState} from '../System/Game';


export default class Portal_GM extends React.Component{

    render(){

        var tokens = getGameState().tokens;
        var playMap = getGameState().playMap;
        var mapOptions = getGameState().mapOptions;
        
        var mapMargin = {
        }

        return(
            <div>
                <SidePanel mapUrl={playMap} mapOptions={mapOptions} />                
                <Map style={mapMargin}  playerPieces={tokens} mapUrl={playMap} mapOptions={mapOptions} />
                <CharInfoPanel tokens={tokens} />
            </div>
        )
    }
}
