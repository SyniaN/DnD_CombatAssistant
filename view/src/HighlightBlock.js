import React from 'react';

export default class HighlightBlock extends React.Component{

    render(){
        var highlightBlockStyle = {
            top:  this.props.posX,
            left: this.props.posY,
            width: "60px",
            height: "60px",
            backgroundColor: "white"
        }

        return (
            <div style={highlightBlockStyle}>111</div>
        );

    }
}

HighlightBlock.propTypes = {
    posX: React.PropTypes.number.isRequired,
    posY: React.PropTypes.number.isRequired
};