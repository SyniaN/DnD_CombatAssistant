import React from 'react';
import PointsOrb from './PointsOrb_PC';

export default class ActionBar extends React.Component {

    render(){

        var token = this.props.token;

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
            width: (token.stats.stamina.value/token.stats.staminaMax.value)*100+"%"
        }

        const staminaBarOverall = {
            bottom: "0"
        }

        const overallStyle={
            height:"150px",
            width: "900px",
            position:"fixed",
            bottom:"0px",
            left: "50%",
            marginLeft: "-450px"
        }

        var actions = [];
        for (var i = 1; i < 11; i++){
            var actionStyle = {
                width: "57px",
                height:"57px",
                cursor: "pointer",
                marginRight:"3px",
                float: "left",
                backgroundColor:"white"
            }
            var textStyle = {
                marginLeft: "2px"
            }
            var text = i < 10 ? i : 0;
            actions.push(
                <div style={actionStyle}>
                    <p style={textStyle}>{text}</p>
                </div>
            )
        }
        return(
            <div id="ActionBar" style={overallStyle}>
                <div style={hpOrbStyle}>
                    <PointsOrb size="130px" color="red" current={token.stats.hp.value} max={token.stats.maxHp.value}></PointsOrb>
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
                    <PointsOrb size="130px" color="blue" current={token.stats.mp.value} max={token.stats.maxMp.value}></PointsOrb>
                </div>
            </div>
        )
    }

}