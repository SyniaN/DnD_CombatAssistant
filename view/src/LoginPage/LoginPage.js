import React from 'react';
import { Link } from 'react-router-dom';
import { addToken, removeToken, getGameState } from '../System/Game';
import { setLocalcharId, getLocalState } from '../System/Game_Local';
import AvatarSelection from './AvatarSelection_LoginPage';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        var myState = getGameState();
        var localUUID = getLocalState().uuid;
        for (var tokenId in myState.tokens){
            var token = myState.tokens[tokenId];
            if (token.uuid === localUUID){
                removeToken(tokenId);
            }
        }

        this.state = {
            name: "",
            icon: "1.jpg"
        };
        
        this.joinGame = this.joinGame.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.incrementAvatar = this.incrementAvatar.bind(this);
        this.decrementAvatar = this.decrementAvatar.bind(this);
    }

	incrementAvatar() {
		var iconArray = getLocalState().icons;
		var index = iconArray.indexOf(this.state.icon);
		var iconCount = iconArray.length;
		
        if (index < iconCount-1) {
            index++;
        } else {
            index = 0;
        }
        
        var newIcon = iconArray[index];
        
        this.setState({ icon: newIcon });
    }
    
    decrementAvatar() {
		var iconArray = getLocalState().icons;
		var index = iconArray.indexOf(this.state.icon);
		var iconCount = iconArray.length;
		
        if (index > 0) {
            index--;
        } else {
            index = iconCount - 1;
        }
        
        var newIcon = iconArray[index];
        
        this.setState({ icon: newIcon });
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    joinGame() {

        var hue = Math.floor(Math.random() * 360);
        var saturation = Math.floor(Math.random() * 10) + 40 + "%";
        var lightness = Math.floor(Math.random() * 10) + 40 + "%";

        var newToken = {
            name: this.state.name,
            tokenType: "player",
            uuid: getLocalState().uuid,
            color: "hsl(" + hue + "," + saturation + "," + lightness + ")",
            positionX: 5 + Math.floor(Math.random() * 5),
		    positionY: 5 + Math.floor(Math.random() * 5),
            icon: this.state.icon,
            width: "60px",
            height: "60px",
            "hp": "16",
            "hpMax": "20",
            "mp": "4",
            "mpMax": "10",
            "experience": "9",
            "experienceMax": "12",
            "ac": "10"
        };

        var newId = addToken(newToken);

        setLocalcharId(newId);

    }

    render() {




        var inputStyle = {
            width: "100%",
            padding: "10px",
            textAlign: "center",
            height: "40px",
            border: "1px solid #ccc",
            background: "#fafafa",
            transition: "0.2s ease-in-out",
            borderRadius: "5px"
        };

        var loginBoxStyle = {
            position: "relative",
            width: "320px",
            margin: "20px auto",
            padding: "10px 40px 40px",
            textAlign: "center",
            background: "#fff",
            border: "1px solid #ccc"
        };

        var loginButtonStyle = {
            marginTop: "10px",
            marginBottom: "10px",
            padding: "10px 20px"
        };

        var overallStyle = {
            height: "100vh",
            width: "100%",
            backgroundImage: "url('/BG/loginBG2.jpg')",
            backgroundSize: "cover",
            paddingTop: "100px"
        };

        return (
            <div style={overallStyle} >


                <div style={loginBoxStyle}>

                    <h2>Combat Assistant</h2>

                    <AvatarSelection incrementAvatar={this.incrementAvatar} decrementAvatar={this.decrementAvatar} icon={this.state.icon}/>

                    <div className="form-box">
                        <form action="" method="">
                            <label> Character Name: </label>
                            <input style={inputStyle} name="name" type="text" onChange={this.handleChange} />
                            <Link to="/Player"><button style={loginButtonStyle} className="btn btn-info btn-block" onClick={this.joinGame}>Join as Player Character</button></Link>
                        </form>

                        <p>---------- OR ----------</p>

                        <Link to="/GameMaster"><button style={loginButtonStyle} className="btn btn-info btn-block login">Join as Game Master</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}