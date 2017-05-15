import React from 'react';
import Map from './Map';
import BottomPanel from './BottomPanel';
import { getGameState, removeToken } from './Game';
import { getLocalState } from './Game_Local';
import { Link } from 'react-router-dom';

//import CombatCalculator from './CombatCalculator';

class PCPortal extends React.Component {

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
                        <Link to="/GameMaster"><button style={buttonStyle} className="btn btn-default">Open Game Master Controls</button></Link>
                        <Link to="/"><button style={buttonStyle} className="btn btn-default" onClick={this.removeLocalChar}>Log out</button></Link>
                    </div>
                   
                    <Map playerPieces={tokens} mapUrl={playMap} mapOptions={mapOptions} />
                    <BottomPanel tokens={tokens} />


            </div>
        );
    }
}



export default PCPortal;