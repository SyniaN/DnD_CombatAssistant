import React from 'react';
import Map from './Map';
import SidePanel from './SidePanel';
import BottomPanel from './BottomPanel';

//import CombatCalculator from './CombatCalculator';

class App extends React.Component {

    render() {
        return (
            <div>
                    <SidePanel mapUrl={this.props.playMap} mapOptions={this.props.mapOptions} />

                    <Map playerPieces={this.props.tokens} mapUrl={this.props.playMap} mapOptions={this.props.mapOptions} />

                    <BottomPanel tokens={this.props.tokens} />


            </div>
        );
    }
}



export default App;