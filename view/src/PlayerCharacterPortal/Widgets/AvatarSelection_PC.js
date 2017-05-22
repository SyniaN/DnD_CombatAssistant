import React from 'react';

export default class AvatarSelection extends React.Component {
    render() {
        var arrows = {
            height: "100%",
            margins: "auto",
            padding: "0px",
            lineHeight: "95px"
        };

        var avatarStyle = {
            height: "120px",
            width: "100%",
            margin: "auto",
            borderRadius: "50%",
            backgroundSize: "cover",
            backgroundImage: "url('/token_icons/" + this.props.icon + "')"
        };

        var avatarBoxStyle = {

            width: "100%",
            height: "120px",
            margin: "10px auto 10px"
        };
        return (
            <div style={avatarBoxStyle} className="row">
                <div style={arrows} className="col-xs-2" >
                    <button type="button" className="btn btn-default btn-sm" onClick={this.props.decrementAvatar}>
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    </button>
                </div>
                <div className="col-xs-8">
                    <div style={avatarStyle}></div>
                </div>
                <div style={arrows} className="col-xs-2">
                    <button type="button" className="btn btn-default btn-sm" onClick={this.props.incrementAvatar}>
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        )
    }
}