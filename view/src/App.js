import React from 'react';
import Map from './Map';
//import CombatCalculator from './CombatCalculator';

class App extends React.Component {
    render(){
        return (
            <div>
                <h1> Grid </h1>
                <Map/>
            </div>
        );
    }
}

export default App;