import React from 'react';
import { getGameState, activateFogger, deactivateFogger, changeFogStatus } from './Game';

export default class Tile extends React.Component {

    constructor(props) {
        super();
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);

    }

    handleMouseDown(event) {
        console.log('mouse down on tile');
        if (getGameState().fogOfWar.foggerSelected) {
            activateFogger();
        }
        this.handleMouseOver();
    }

    handleMouseOver() {
        //event.preventDefault();
        console.log('mouse over tile');
        var fogOfWarState = getGameState().fogOfWar;

        if (fogOfWarState.inAction && fogOfWarState.foggerSelected && this.props.mapOptions.fogOfWar) {

            if (fogOfWarState.foggerMode === "Remove") {
                changeFogStatus(this.props.y, this.props.x, false);
            } else {
                changeFogStatus(this.props.y, this.props.x, true);
            }
        }
    }

    handleMouseUp(event) {
        console.log('mouse up on tile');
        if (getGameState().fogOfWar.foggerSelected) {
            deactivateFogger();
        }
    }

    shouldComponentUpdate(nextProps, nextState) {

        for (var prop in nextProps.mapOptions){
            if (this.props.mapOptions[prop] !== nextProps.mapOptions[prop]){
                return true;
            }
        }

        if (this.props.fogStatus === nextProps.fogStatus) {
            return false;
        } else {
            return true;
        }
    }




    render() {

        console.log('rendering MapTile');
        var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var fogThisTile = this.props.fogStatus && this.props.mapOptions.fogOfWar
        var divStyle = {
            width: this.props.size + 'px',
            height: this.props.size + 'px',
            borderStyle: this.props.mapOptions.gridLines ? 'inset' : null,
            borderWidth: this.props.mapOptions.gridLines ? '0.5px' : null,
            borderColor: "rgba(160, 160, 160, 0.2)",
            float: 'left',
            backgroundColor: fogThisTile ? 'grey' : null
        };

        var labelStyle = {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            display: this.props.mapOptions.gridLabels ? '' : 'none',
            position: "absolute",
            zIndex: "20"
        };

        return (
            <div style={divStyle} onMouseUp={this.handleMouseUp} onMouseDown={this.handleMouseDown} onMouseOver={this.handleMouseOver}>
                <label style={labelStyle}>{letters[this.props.x]}{this.props.y}</label>
            </div>
        );
    }
}
