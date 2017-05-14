import React from 'react';
import { deselectCharacter, deselectFogger } from './Game';
import AddTokenWidget from './Widgets/AddTokenWidget';
import MapOptionWidget from './Widgets/MapOptionWidget';
import FreeTextWidget from './Widgets/FreeTextWidget';
import FogOfWarWidget from './Widgets/FogOfWarWidget';
import FullStateInfo from './Widgets/FullStateInfo';
import { Link } from 'react-router-dom';

export default class GMSidePanel extends React.Component {
    
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
            width: "350px",
            height: "100%",
            //float: 'left',
            padding: '10px',
            position: 'fixed',
            zIndex: 999,
            backgroundColor: "white",
            overflow: "scroll"
        };
        
        
        return(
            <div style={panelStyle} onClick={this.handleClick}>
                    <div>
                        <Link to="/"><button className="btn btn-default">Login as Player</button></Link>
                        <hr/>
                        <FreeTextWidget></FreeTextWidget>
                        <FullStateInfo></FullStateInfo>
                        <MapOptionWidget mapOptions={this.props.mapOptions} mapUrl={this.props.mapUrl}></MapOptionWidget>
                        <FogOfWarWidget></FogOfWarWidget>  
                        <AddTokenWidget></AddTokenWidget>                                              
                    </div>
            </div>
                
        );
    }
}