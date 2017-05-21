import React from 'react';
import {setFoggerMode, selectFogger, getGameState, deselectCharacter} from '../../System/Game';

export default class ForOfWarWidget extends React.Component {
    constructor(){
        super();
        this.handleAddFogClick = this.handleAddFogClick.bind(this);
        this.handleRemoveFogClick = this.handleRemoveFogClick.bind(this);
    }
    
    handleAddFogClick(event){
        event.stopPropagation();
        deselectCharacter();
        selectFogger();
        setFoggerMode("Add");
    }
    
    handleRemoveFogClick(event){
        event.stopPropagation();
        deselectCharacter();
        selectFogger();
        setFoggerMode("Remove");
    }
    
    
    
    render(){
        var fogOfWar = getGameState().fogOfWar;
        var basicClasses = "btn btn-default";
        var addButtonClasses = basicClasses;
        var removeButtonClasses = basicClasses;
        
        if (fogOfWar.foggerSelected){
            if (fogOfWar.foggerMode === "Add" && fogOfWar.foggerSelected){
                addButtonClasses += " active";
            } else if (fogOfWar.foggerMode === "Remove" && fogOfWar.foggerSelected){
                removeButtonClasses += " active";
            } 
        }
        
        return (
            <div>
                <div className="form-group">
                    <button className={addButtonClasses} onClick={this.handleAddFogClick}>Add Fog</button>
                </div>
                
                <div className="form-group">
                    <button className={removeButtonClasses} onClick={this.handleRemoveFogClick}>Remove Fog</button>
                </div>
                <hr/>
            </div>
        );
    }
}