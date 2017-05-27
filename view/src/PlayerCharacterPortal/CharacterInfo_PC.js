import React from 'react';

export default class CharacterInfo extends React.Component{

    render(){

        const overallStyle = {
            height: "125px",
            width: "300px",
            float: "right",
            marginBottom: "5px"
        };
        
        const photoHalf= {
            width:"100px",
            height:"100%",
            backgroundColor: this.props.char.color,
            float:"left",
            border: "3px solid rgb(200, 200, 200)",
            textShadow: "0px 0px 3px rgb(200, 200, 200)"
        }
        
        const textHalf = {
            width: "200px",
            height: "100%",
            float:"left",
            color: 'rgb(230, 230, 230)',
            paddingRight: "10px",
            textShadow: "0px 0px 5px #000000"
        };

        const photoStyle = {
            width: "100%",
            height: "85%",
            backgroundImage: "url('/token_icons/"+this.props.char.icon+"')",
            backgroundSize: "cover",
            float: "left"
        };

        const statsStyle = {
            float: "left",
            width: "100%",
            textAlign: "right"
        };

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
                    <div style={photoStyle}>
                        
                    </div>
                    <p><label>HP: </label> {this.props.char.stats.hp.value}/{this.props.char.stats.maxHp.value}</p>
                </div>
                
            </div>
        )
    }
}

CharacterInfo.propTypes = {
    char: React.PropTypes.object.isRequired
};