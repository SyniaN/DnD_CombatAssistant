import React from 'react';

export default class AttackDetails extends React.Component{
    render(){
        return(
        <div id="attacking_detail_panel">
            <div id="header">
                <h1>Attacking Details Component</h1>
            </div>

            <div className="row" id="body">
                <div className="col-md-6">
                    <h4>Attacker</h4>
                    <div>
                        <label>Name:</label> Asher
                    </div>

                    <div>
                    <label>Attack Die</label>1d20 + 4
                    </div>

                    <div>
                    <label>Damage Die</label>1d8 + 4
                    </div>
                </div>

                <div className="col-md-6">
                    <h4>Defender</h4>

                    <div>
                    <label>Name: Asher</label>
                    </div>

                    <div>
                    <label>AC</label>15
                    </div>

                    <div>
                    <label>HP</label>15
                    </div>

                    <div>
                    <label>Damage</label>15
                    </div>
                </div>

            </div>
            <div id="buttons">
                <button>Attack</button>
                <button>Clear</button>
            </div>
            <hr/>
        </div>
        )
    }
}

