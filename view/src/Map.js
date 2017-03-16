import React from 'react';
import MapTile from './MapTile';

export default class Map extends React.Component {
    constructor() {
        super();
        this.state = {isToggleOn: true};
        
        // This binding is necessary to make `this` work in the callback
        this.drag = this.drag.bind(this);
    }
    
    drag(ev) {
        console.log('dragging')
        ev.dataTransfer.setData("text", ev.target.id);
    }    
    
    render(){
        
        const MapStyle = {
            width: "1500px",
            padding: "0",
            marin: '0'
        };
        
        var tileArray = [];
        
        for (var i = 0; i < 9; i++){
            for(var j = 0; j < 15; j++){
                var keyString = i+ "_" + j;
                tileArray.push(<MapTile key={keyString}/>);
            }
        }
        
        return (
            <div className="container" style={MapStyle}>
                {tileArray}
                <p id="drag1" draggable="true" onDragStart={(e) => this.drag(e)}>This is a draggable paragraph. Drag this element into the rectangle.</p>
            </div>
            
            
            
        );
    }
}