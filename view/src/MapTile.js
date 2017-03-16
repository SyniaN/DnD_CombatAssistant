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
        
        return (
            <div style={divStyle}> 
                {this.props.children}
            </div>
        );
    }
}

