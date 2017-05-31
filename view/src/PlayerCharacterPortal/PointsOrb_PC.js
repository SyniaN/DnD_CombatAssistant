import React from 'react';

export default class PointsOrb extends React.Component{
    render(){
        const size = "100px";
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
        const secondaryHighlightStyle = {
            height: "100%",
            width:"100%",
            background: "transparent radial-gradient(circle at 95% 70% , rgba(255, 255, 255, 0.5), transparent 30%) repeat scroll 0% 0%",
            position: "absolute"
        };
        const pointsLiquidStyle = {
            height: (this.props.current / this.props.max)*100+"%",
            width:"100%",
            backgroundColor: this.props.color,
            position: "absolute",
            bottom: 0
        }
        const backgroundStyle = {
            height:"100%",
            width:"100%",
            backgroundColor: "rgb(85, 85, 85)",
            position: "absolute"
        }
        
        return(
            <div style={overallStyle}>
                <div style={backgroundStyle}></div>
                <div style={pointsLiquidStyle}></div>
                <div style={mainHighlightStyle}></div>
                <div style={secondaryHighlightStyle}></div>
            </div>
        );
    }
}