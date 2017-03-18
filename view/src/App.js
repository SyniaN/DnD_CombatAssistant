import React from 'react';
import Map from './Map';
import SidePanel from './SidePanel';

//import CombatCalculator from './CombatCalculator';

class App extends React.Component {
    

    
    render(){
        return (
            <div>
                <div>
                    <SidePanel mapUrl={this.props.playMap} mapOptions={this.props.mapOptions}/>
                    <Map playerPieces={this.props.playerPieces} mapUrl={this.props.playMap} mapOptions={this.props.mapOptions}/>
                </div>
            </div>
        );
    }
}



export default App;