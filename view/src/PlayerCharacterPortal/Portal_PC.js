import React from 'react';
import Map from './Map_PC';
import SidePanel from './SidePanel_PC';
import CharInfoPanel from './CharInfoPanel_PC';
import { getGameState } from '../System/Game';
import {getLocalState} from '../System/Game_Local';
import ActionBar from './ActionBar_PC';


//import CombatCalculator from './CombatCalculator';

export default class Portal_PC extends React.Component {

    render() {
        var tokens = getGameState().tokens;
        var playMap = getGameState().playMap;
        var mapOptions = getGameState().mapOptions;
        var token = tokens[getLocalState().charId];

        return (
            <div>
                    <SidePanel token={token} />                    
                    <Map playerPieces={tokens} mapUrl={playMap} mapOptions={mapOptions} />
                    <CharInfoPanel tokens={tokens} />
                    <ActionBar token={token}/>

            </div>
        );
    }
}



