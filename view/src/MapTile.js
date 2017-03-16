import React from 'react';

export default class MapTile extends React.Component {
    
    render(){
        var divStyle = {
            width: '100px',
            height: '100px',
            borderStyle: 'solid',
            borderWidth: '1px',
            float: 'left'
        };
        
        var characterStyle = {
            width: "100%",
            height: "100%"
        }
        return (
            <div style={divStyle}> 
                <div draggable="true" style={characterStyle}>Asher</div>
            </div>
        );
    }
}