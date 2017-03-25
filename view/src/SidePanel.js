import React from 'react';
import { deselectCharacter, deselectFogger } from './Game';
import AddTokenWidget from './Widgets/AddTokenWidget';
import MapOptionWidget from './Widgets/MapOptionWidget';
import FreeTextWidget from './Widgets/FreeTextWidget';
import FogOfWarWidget from './Widgets/FogOfWarWidget';

export default class SidePanel extends React.Component {
    
    constructor(props){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    
    //Click event
    handleClick(){
        deselectCharacter();
        deselectFogger();
        console.log('deselecting');
    }
    
    render(){
        var panelStyle = {
            width: "200px",
            //maxHeight: getGameState().mapScale.height,
            float: 'left',
            padding: '10px'
        };
        return(
            <div style={panelStyle} onClick={this.handleClick}>
                    <FreeTextWidget></FreeTextWidget>
                    <AddTokenWidget></AddTokenWidget>
                    <MapOptionWidget mapOptions={this.props.mapOptions} mapUrl={this.props.mapUrl}></MapOptionWidget>
                    <FogOfWarWidget></FogOfWarWidget>
            </div>
                
        );
    }
}