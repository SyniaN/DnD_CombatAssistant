import React from 'react';

export default class CharacterInfo extends React.Component{

    render(){

        const overallStyle = {
            width: "220px",
            float: "right",
            marginBottom: "5px"
        };
        
        const photoHalf= {
            width:"80px",
            height:"100px",
            float:"left",
            //border: "5px solid " + this.props.char.color,
            textShadow: "0px 0px 3px rgb(200, 200, 200)",            
            position: "relative"
        };
        
        const textHalf = {
            width: "110px",
            float:"left",
            color: 'white',
            paddingRight: "10px",
            textShadow: "0px 0px 3px rgb(70, 70, 70)"
        };

        const photoStyle = {
            width: "100%",
            height: "100%",
            backgroundImage: "url('/token_icons/"+this.props.char.icon+"')",
            backgroundSize: "cover",
            float: "left",
            padding: "3px"
        };

        const statsStyle = {
            float: "left",
            width: "100%",
            textAlign: "right"
        };
        
        const barStyle = {
            transformOrigin:"0% 100%",
            transform: "rotate(-90deg) translate(-85px, 90px)",
            height: "10px",
            width: "100px"
        }
        
        const barMarginPadding = {
            marginBottom: "2px",
            height: "10px"
        }
        
        const hpBarProgress = {
            width: (this.props.char.stats.hp.value / this.props.char.stats.maxHp.value)*100 + "%"
        }
        
        const mpBarProgress = {
            width: (this.props.char.stats.mp.value / this.props.char.stats.maxMp.value)*100 + "%"
        }
        
        const experienceBarProgress = {
            width: (this.props.char.stats.experience.value / this.props.char.stats.experienceMax.value)*100 + "%"
        }

        const armorTagStyle = {
            height: "30px",
            width: "30px",
            backgroundImage: "url('ui/shield.png')",
            backgroundSize: "cover",
            color: "rgb(30,30,30)",
            position: "absolute",
            left:"0px",
            bottom:"0px"
        }

        const armorTextStyle = {
            margin: "4px",
            fontWeight: "bold",
            fontSize: "15px",
            textAlign: "center"
        }

        return(
            <div style={overallStyle}>
            
                <div id="text" style={textHalf} >
                    <div style={statsStyle}>
                        <div>
                            <p>{this.props.char.alerts.alert1}</p>
                            <p>{this.props.char.alerts.alert2}</p>
                            <p>{this.props.char.alerts.alert3}</p>
                            <p>{this.props.char.alerts.alert4}</p>
                        </div>
                        
                    </div>
                </div>
                
                <div id="icon" style={photoHalf} >
                    <div style={armorTagStyle}>
                        <div style={armorTextStyle}>{this.props.char.stats.ac.value}</div>
                    </div>
                    <div style={photoStyle}>
                        <div style={barStyle}>
                            <div className="progress" style={barMarginPadding} >
                                <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={hpBarProgress}>
                                </div>
                            </div>
                            <div className="progress" style={barMarginPadding}>
                                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={mpBarProgress}>
                                </div>
                            </div>
                            <div className="progress" style={barMarginPadding}>
                                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={experienceBarProgress}>
                                </div>
                            </div>                            
                        </div>                        
                    </div>
                    
                </div>
            </div>
        );
    }
}

CharacterInfo.propTypes = {
    char: React.PropTypes.object.isRequired
};