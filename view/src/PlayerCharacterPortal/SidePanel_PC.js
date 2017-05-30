import React from 'react';
import { Link } from 'react-router-dom';


import { getGameState, deselectCharacter, deselectFogger, removeToken } from '../System/Game';
import { getLocalState } from '../System/Game_Local';

import FreeTextWidget from './Widgets/FreeTextWidget';
import TokenStats from './Widgets/TokenStats';
import TokenInventory from './Widgets/TokenInventory';

export default class SidePanel extends React.Component {
    
    constructor(props){
        super(props);
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
            width: "200px",
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
        };
        
        var token = getGameState().tokens[getLocalState().charId];
        
        return(
            <div style={panelStyle} onClick={this.handleClick}>
                    <div>
                        
                        <Link to="/"><button style={buttonStyle} className="btn btn-default" onClick={this.removeLocalChar}>Log out</button></Link>
                        <hr/>
                        <TokenStats token={token}></TokenStats>
                        <TokenInventory token={token}></TokenInventory>
                        <FreeTextWidget></FreeTextWidget>
                                                                
                    </div>
            </div>
                
        );
    }
}