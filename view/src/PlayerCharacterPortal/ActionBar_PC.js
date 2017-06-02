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
            width: "430px",
            padding: "0px 20px"
        }

        const mpOrbStyle = {
            float: "left"
        }

        const experienceBarProgress = {
            width: (token.stats.experience.value/token.stats.experienceMax.value)*100+"%"
        }

        const experienceBarOverall = {
            bottom: "0"
        }

        const overallStyle={
            height:"150px",
            width: "700px",
            position:"fixed",
            bottom:"0px",
            left: "50%",
            marginLeft: "-350px"
        }

        const actionsStyle = {
            margin: "auto",
            width: Object.keys(token.skills).length * 70 + "px"
        }

        var actions = [];
        var i = 1;
        for (var skill in token.skills){
            if (token.skills.hasOwnProperty(skill)) {
                var actionStyle = {
                    width: "64px",
                    height:"64px",
                    cursor: "pointer",
                    marginRight:"6px",
                    float: "left",
                    backgroundImage: "url('"+token.skills[skill].icon+"')"
                }
                var textStyle = {
                    marginLeft: "2px"
                }

                var text = i < 10 ? i : 0;
                actions.push(
                    <div style={actionStyle} key={skill}>
                        <p style={textStyle}>{text}</p>
                    </div>
                )
                i++;
            }
            
        }
        return(
            <div id="ActionBar" style={overallStyle}>
                <div style={hpOrbStyle}>
                    <PointsOrb size="130px" color="red" current={token.stats.hp.value} max={token.stats.maxHp.value}></PointsOrb>
                </div>

                <div style={middleBlockStyle}>
                    <div className="progress" style={experienceBarOverall}>
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={experienceBarProgress}></div>
                    </div>
                    <div style={actionsStyle}>
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