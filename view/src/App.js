import React from 'react';
import Map from './Map';
import SidePanel from './SidePanel';

//import CombatCalculator from './CombatCalculator';

class App extends React.Component {
    

    
    render(){
        return (
            <div>
                <SidePanel playMap={this.props.playMap}/>
                <Map playerPieces={this.props.playerPieces} playMap={this.props.playMap}/>
            </div>
        );
    }
}



export default App;