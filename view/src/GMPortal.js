import React from 'react';
import Map from './Map';
import GMSidePanel from './GMSidePanel';
import BottomPanel from './BottomPanel';
import {getGameState} from './Game';
import { Link } from 'react-router-dom';

class GMPortal extends React.Component{

    render(){

        var tokens = getGameState().tokens;
        var playMap = getGameState().playMap;
        var mapOptions = getGameState().mapOptions;

        var buttonStyle = {
            left: "370px",
            top: "10px",
            position: "fixed",
            zIndex: "999"
        }

        return(
            <div>
                <GMSidePanel mapUrl={playMap} mapOptions={mapOptions} />
                <Link to="/"><button style={buttonStyle} className="btn btn-default">Close Game Master Controls</button></Link>
                <Map playerPieces={tokens} mapUrl={playMap} mapOptions={mapOptions} />
                <BottomPanel tokens={tokens} />
            </div>
        )
    }
}

export default GMPortal;