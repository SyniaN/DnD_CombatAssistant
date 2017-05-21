import React from 'react';
import { deselectCharacter, deselectFogger, removeToken } from '../System/Game'
import { getLocalState } from '../System/Game_Local';

import { Link } from 'react-router-dom';

export default class SidePanel extends React.Component {
    
    constructor(props){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.removeLocalChar = this.removeLocalChar.bind(this);
    }

    removeLocalChar(){
        removeToken(getLocalState().charId);
    }
    
    //Click event
    handleClick(){
        deselectCharacter();
        deselectFogger();
        console.log('deselecting');
    }
    
    render(){

        var panelStyle = {
            width: "300px",
            height: "100%",
            //float: 'left',
            padding: '10px',
            position: 'fixed',
            zIndex: 999,
            backgroundColor: "white",
            overflow: "scroll"
        };

        var buttonStyle = {
            marginTop: "10px",
            marginLeft: "10px"
        }
        
        
        return(
            <div style={panelStyle} onClick={this.handleClick}>
                    <div>

                        <Link to="/Player"><button style={buttonStyle} className="btn btn-default">Player View</button></Link>
                        <Link to="/"><button style={buttonStyle} className="btn btn-default" onClick={this.removeLocalChar}>Log out</button></Link>
                        
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