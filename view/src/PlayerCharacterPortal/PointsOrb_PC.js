import React from 'react';
import PropTypes from 'prop-types';

export default class PointsOrb extends React.Component{
    render(){
        const size = this.props.size;
        const overallStyle ={
            height: size,
            width: size,
            borderRadius: "50%",
            overflow: "hidden",
            position: "relative",
            border: "3px solid rgb(124, 124, 124)",
            boxShadow: "0px 0px 15px grey"
        }
        const mainHighlightStyle = {
            height: "100%",
            width:"100%",
            background: "transparent radial-gradient(circle at 30% 30% , rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4) 10%, transparent 60%) repeat scroll 0% 0%",
            position: "absolute"
        };
        const shadowStyle = {
            height: "100%",
            width:"100%",
            background: "transparent radial-gradient(circle at 60% 90% , rgba(57, 57, 57, 0.5), transparent 40%) repeat scroll 0% 0%",
            position: "absolute"
        };
        const pointsLiquidStyle = {
            height: (this.props.current / this.props.max)*100+"%",
            width:"100%",
            backgroundColor: this.props.color,
            position: "absolute",
            bottom: 0,
            transitionDuration: "0.8s"
        }
        const backgroundStyle = {
            height:"100%",
            width:"100%",
            backgroundColor: "rgb(20, 20, 20)",
            position: "absolute"
        }
        
        return(
            <div style={overallStyle}>
                <div id="background" style={backgroundStyle}></div>
                <div id="liquid" style={pointsLiquidStyle}></div>
                <div id="shadow" style={shadowStyle}></div>
                <div id="highlight" style={mainHighlightStyle}></div>
                
            </div>
        );
    }
}

PointsOrb.propTypes = {
    current: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
}