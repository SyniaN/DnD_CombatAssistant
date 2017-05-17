import React from 'react';
import { Link } from 'react-router-dom';
import { addToken } from './Game';
import { setLocalcharId } from './Game_Local';

export default class LoginPage extends React.Component{
    constructor(props){
        super();
        this.state = {
            name: "",
            avatar: 1
        }
        this.joinGame = this.joinGame.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.incrementAvatar = this.incrementAvatar.bind(this);
        this.decrementAvatar = this.decrementAvatar.bind(this);
    }
    
    incrementAvatar(){
        if(this.state.avatar < 8){
            var newAv = this.state.avatar + 1;
            this.setState({avatar: newAv});
        } else {
            this.setState({avatar: 1});
        }
    }
    
    decrementAvatar(){
        if(this.state.avatar > 2){
            var newAv = this.state.avatar - 1;
            this.setState({avatar: newAv});
        } else {
            this.setState({avatar: 9});
        }
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
            "icon": this.state.avatar + ".png",
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
            width: "320px",
            margin: "20px auto",
            padding: "10px 40px 40px",
            textAlign: "center",
            background: "#fff",
            border: "1px solid #ccc"
        }

        var loginButtonStyle = {
            marginTop: "10px",
            marginBottom: "10px",
            padding:"10px 20px"
        };

        var avatarStyle = {
             height: "100px",
             width: "100px",
             margin: "auto",
             borderRadius: "50%",
             backgroundSize: "cover",
             backgroundImage: "url('/token_icons/"+this.state.avatar+".png')"
         };
         
         var avatarBoxStyle= {
             
             width: "100%",
             height: "100px",
             margin: "10px auto 10px"
         };
         
         var arrows = { 
            height: "100%",
            margins: "auto",
            padding: "0px",
            lineHeight: "95px"
         };
         
         var overallStyle ={
            height:"100vh",
            width: "100%",
            backgroundImage: "url('/BG/loginBG2.jpg')",
            backgroundSize: "cover",
            paddingTop:"100px"
         };
        
        return(
            <div style={overallStyle} >
                

                <div style={loginBoxStyle}>
                
                    <h2>Combat Assistant</h2>
                
                    <div style={avatarBoxStyle}    className="row">
                        <div style={arrows} className="col-xs-2" >
                        
                            <button type="button" className="btn btn-default btn-sm" onClick={this.decrementAvatar}>
                              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> 
                            </button>
                        </div>
                        <div className="col-xs-8">
                            <div style={avatarStyle}></div>
                        </div>
                        <div style={arrows} className="col-xs-2">
                            <button type="button" className="btn btn-default btn-sm" onClick={this.incrementAvatar}>
                              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> 
                            </button>
                        </div>
                    </div>
 
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