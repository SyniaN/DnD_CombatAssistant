import React from 'react';

export default class WeaponStats extends React.Component{
    render(){
        return(
            <div>
                    <input type="text" placeholder="weapon1"/> 
                    <input type="text" size="6"placeholder="atk bonus"/>
                    <input type="text" size="2"/> d <input type="text" size="2"/> 
                    <select>
                    <option>Str</option>
                    <option>Dex</option>
                    </select>
                    <button>select</button>
            </div>
        )
    }
}