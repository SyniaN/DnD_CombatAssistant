import React from 'react';

export default class CharacterInfo extends React.Component{

    render(){

        const overallStyle = {
            height: "100px",
            width: "250px",
            float: "right",
            marginBottom: "20px"
        };
        
        const photoHalf= {
            width:"100px",
            height:"100px",
            backgroundColor: this.props.char.color,
            float:"left",
            marginLeft: "10px",
            border: "3px solid rgb(200, 200, 200)"
        }
        
        const textHalf = {
            width: "140px",
            height: "100px",
            float:"left",
            color: 'rgb(230, 230, 230)',
            textShadow: "2px 2px 5px #000000",
        };

        const photoStyle = {
            height: "100%",
            width: "100%",
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
                            <p>{this.props.char.notes}</p>
                        </div>
                        
                    </div>
                </div>
            
                <div id="icon" style={photoHalf} >
                    <div style={photoStyle}>
                        {this.props.char.hp}/{this.props.char.maxHp}
                    </div>
                </div>
                
            </div>
        )
    }
}

CharacterInfo.propTypes = {
    char: React.PropTypes.object.isRequired
};