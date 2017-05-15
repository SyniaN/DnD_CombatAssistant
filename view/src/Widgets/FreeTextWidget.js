import React from 'react';

export default class FreeTextWidget extends React.Component {
    render(){
        return (
            <div>
                <h2>Notes</h2>
                <textarea style={{width:"100%", height:"150px"}}>
                </textarea>
                <hr/>
            </div>
        )
    }
}