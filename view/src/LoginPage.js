import React from 'react';
import { Link } from 'react-router-dom';
import { addToken } from './Game';

export default class LoginPage extends React.Component{
    constructor(props){
        super();
        this.joinGame = this.joinGame.bind(this);
    }

    joinGame(){

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
            margin: "80px auto",
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
            <div >
                <div style={loginBoxStyle}>
                    
                    <div className="form-box">
                        <form action="" method="">
                            <label> Character Name: </label>
                            <input style={inputStyle} name="name" type="text"  />
                            <button style={loginButtonStyle} className="btn btn-info btn-block login">Join as Player Character</button>
                        </form>

                        <p>---------- OR ----------</p>

                        <Link to="/GameMaster"><button style={loginButtonStyle} className="btn btn-info btn-block login">Join as Game Master</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}