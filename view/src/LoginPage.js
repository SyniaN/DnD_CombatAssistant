import React from 'react';
import { Link } from 'react-router-dom';
import { addToken } from './Game';
import { setLocalcharId } from './Game_Local';

export default class LoginPage extends React.Component{
    constructor(props){
        super();
        this.state = {
            name: ""
        }
        this.joinGame = this.joinGame.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({name: event.target.value});
    }

    joinGame(){
        

        var newId = addToken({
            name: this.state.name,
            tokenType: "player",
            color: 'yellow',
            position:[5+Math.floor(Math.random()*5), 5+Math.floor(Math.random()*5)],
            "hp": "10",
			"maxHp": "10",
			"ac": "10",
			"notes": "New Player",
        });

        setLocalcharId(newId);
        
    }

    render(){

        var inputStyle ={
            width: "100%",
            padding: "10px",
            textAlign: "center",
            height:"40px",
            border: "1px solid #ccc",
            background: "#fafafa",
            transition:"0.2s ease-in-out",
            borderRadius: "5px"
        }

        var loginBoxStyle = {
            position: "relative",
            width: "300px",
            margin: "20px auto",
            padding: "20px 40px 40px",
            textAlign: "center",
            background: "#fff",
            border: "1px solid #ccc"
        }

        var loginButtonStyle = {
            marginTop: "10px",
            marginBottom: "10px",
            padding:"10px 20px"
        }

        // var avatarStyle = {
        //     width: "100px",
        //     height: "100px",
        //     margin: "10px auto 30px",
        //     borderRadius: "50%",
        //     border: "2px solid #aaa",
        //     backgroundSize: "cover",
        //     backgroundImage: "url('/token_icons/7.png')"
        // }

        return(
            <div style={{textAlign: "center",}} >
                <h2> Dungeons and Dragons Combat Map </h2>

                <div style={loginBoxStyle}>
 
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
        )
    }
}