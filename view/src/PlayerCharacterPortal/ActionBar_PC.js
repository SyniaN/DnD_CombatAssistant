import React from 'react';
import PointsOrb from './PointsOrb_PC';

export default class ActionBar extends React.Component {

    render(){

        const hpOrbStyle= {
            float: "left"
        }

        const middleBlockStyle = {
            float: "left",
            width: "640px",
            padding: "0px 20px"
        }

        const mpOrbStyle = {
            float: "left"
        }

        const staminaBarProgress = {
            width: "60%"
        }

        const staminaBarOverall = {
            bottom: "0"
        }

        const overallStyle={
            height:"150px",
            width: "900px",
            position:"absolute",
            bottom:"10px"
        }

        var actions = [];
        for (var i = 0; i < 10; i++){
            var actionStyle = {
                width: "60px",
                height:"60px",
                border:"2px grey solid",
                float: "left"
            }
            actions.push(
                <div style={actionStyle}></div>
            )
        }
        return(
            <div id="ActionBar" style={overallStyle}>
                <div style={hpOrbStyle}>
                    <PointsOrb size="130px" color="red" current="2" max="10"></PointsOrb>
                </div>

                <div style={middleBlockStyle}>
                    <div className="progress" style={staminaBarOverall}>
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={staminaBarProgress}></div>
                    </div>
                    <div>
                        {actions}
                    </div>
                </div>

                <div style={mpOrbStyle}>
                    <PointsOrb size="130px" color="blue" current="8" max="10"></PointsOrb>
                </div>
            </div>
        )
    }

}