import React from 'react';
import { Link } from 'react-router-dom';

export default class LoginPage extends React.Component{
    render(){
        return(
            <div id="LoginForm">
                <h2>Login Page</h2>
                <ul>
                    <li><Link to="/Player"> Player Portal </Link></li>
                    <li><Link to="/GameMaster"> Game Master Portal </Link></li>
                </ul>
                
            </div>
        )
    }
}