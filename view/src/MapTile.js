import React from 'react';

export default class MapTile extends React.Component {
    
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state={
            fogOfWar: true
        };
    }
    
    handleClick(){
        if (this.props.mapOptions.fogOfWar){
            if(this.state.fogOfWar){
                this.setState({fogOfWar: false});
            } else {
                this.setState({fogOfWar: true});
            }
        }
    }
    
    render(){
        
        var letters=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var fogThisTile=this.state.fogOfWar && this.props.mapOptions.fogOfWar;
        var divStyle = {
            width: this.props.size+'px',
            height: this.props.size+'px',
            borderStyle: this.props.mapOptions.gridLines?'inset':null,
            borderWidth: this.props.mapOptions.gridLines?'0.5px':null,
            borderColor: "rgba(160, 160, 160, 0.4)",
            float: 'left',
            backgroundColor: fogThisTile?'grey':null
        };
        
        var labelStyle = {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: this.props.mapOptions.gridLabels?'':'none'
        };
        
        return (
            <div style={divStyle} onClick={this.handleClick}> 
                <label style={labelStyle}>{letters[this.props.x]}{this.props.y}</label>
                {this.props.children}
            </div>
        );
    }
}

