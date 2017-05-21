import React from 'react';
import { Link } from 'react-router-dom';

import Map from './Map_PC';
import CharInfoPanel from './CharInfoPanel_PC';
import { getGameState, removeToken } from '../System/Game'
import { getLocalState } from '../System/Game_Local';


//import CombatCalculator from './CombatCalculator';

export default class Portal_PC extends React.Component {

    removeLocalChar(){
        removeToken(getLocalState().charId);
    }

    render() {
        var tokens = getGameState().tokens;
        var playMap = getGameState().playMap;
        var mapOptions = getGameState().mapOptions;

        var buttonSetStyle = {
            position: "fixed",
            zIndex: "999"
        }

        var buttonStyle = {
            marginTop: "10px",
            marginLeft: "10px"
        }
        



        return (
            <div>
                    <div style={buttonSetStyle}>                        
                        <Link to="/GameMaster"><button style={buttonStyle} className="btn btn-default">Game Master Controls</button></Link>
                        <Link to="/"><button style={buttonStyle} className="btn btn-default" onClick={this.removeLocalChar}>Log out</button></Link>
                    </div>
                   
                    <Map playerPieces={tokens} mapUrl={playMap} mapOptions={mapOptions} />
                    <CharInfoPanel tokens={tokens} />


            </div>
        );
    }
}



