import React from 'react';
import Map from './Map_PC';
import SidePanel from './SidePanel_PC';
import CharInfoPanel from './CharInfoPanel_PC';
import { getGameState } from '../System/Game';


//import CombatCalculator from './CombatCalculator';

export default class Portal_PC extends React.Component {

    render() {
        var tokens = getGameState().tokens;
        var playMap = getGameState().playMap;
        var mapOptions = getGameState().mapOptions;

        return (
            <div>
                    <SidePanel mapUrl={playMap} mapOptions={mapOptions} />                    
                    <Map playerPieces={tokens} mapUrl={playMap} mapOptions={mapOptions} />
                    <CharInfoPanel tokens={tokens} />

            </div>
        );
    }
}



