import React from 'react';
import Map from './Map';
import BottomPanel from './BottomPanel';
import { getGameState } from './Game';
import { Link } from 'react-router-dom';

//import CombatCalculator from './CombatCalculator';

class PCPortal extends React.Component {

    

    render() {
        var tokens = getGameState().tokens;
        var playMap = getGameState().playMap;
        var mapOptions = getGameState().mapOptions;

        var buttonStyle = {
            left: "10px",
            top: "10px",
            position: "fixed",
            zIndex: "999"
        }

        return (
            <div>
                    <Link to="/GameMaster"><button style={buttonStyle} className="btn btn-default">Open Game Master Controls</button></Link>
                    <Map playerPieces={tokens} mapUrl={playMap} mapOptions={mapOptions} />
                    <BottomPanel tokens={tokens} />


            </div>
        );
    }
}



export default PCPortal;