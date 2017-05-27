import React from 'react';
import {incrementTokenInventoryItem, decrementItemCount, updateInventory} from '../../System/Game';

export default class TokenInventory extends React.Component{
    constructor(props){
        super(props);
        this.state = props.token.inventory;
        this.incrementItemCount = this.incrementItemCount.bind(this);
        this.decrementItemCount = this.decrementItemCount.bind(this);
        this.changeItem = this.changeItem.bind(this);
        this.sendChangeToGameState = this.sendChangeToGameState.bind(this);
    }

    incrementItemCount(event){
        var section = event.target.name;
        var item = event.target.id;
        var tokenId = this.props.token.id;
        incrementTokenInventoryItem(tokenId, section, item);
    }

    decrementItemCount(event){
        var section = event.target.name;
        var item = event.target.id;
        var tokenId = this.props.token.id;
        decrementItemCount(tokenId, section, item);
    }

    changeItem(event){
        var section = event.target.name;
        var item = event.target.id;
        var newDisplayName = event.target.value;
        var newState = this.state;
        newState[section][item] = {
            ...this.state[section][item],
            "displayName": newDisplayName
        }
        this.setState(newState);
    }

    sendChangeToGameState(){
        updateInventory(this.props.token.id, this.state);
    }


    
    render(){
        var numberStyle = {
            top: "5px"
        }

        var arrowStyle = {
            top:"4px",
            cursor: "pointer"
        }
        var textStyle = {
            width :"75%",
            float: "right",
            lineHeight: "normal"
        }
        var inventoryList = [];

        for ( var sectionName in this.state){
            
            var section = this.state[sectionName];
            var sectionList;
            
            if (section.length === 0){
                sectionList = <p>Empty</p>
            } else {
                sectionList = [];
                for (var itemName in section){
                    sectionList.push(
                        <div key={itemName}>
                            <a name={sectionName} id={itemName} onClick={this.decrementItemCount} style={arrowStyle} className="glyphicon glyphicon-triangle-left" aria-hidden="true"></a>
                            <label style={numberStyle}>{section[itemName].count}</label>
                            <a name={sectionName} id={itemName} onClick={this.incrementItemCount} style={arrowStyle} className="glyphicon glyphicon-triangle-right" aria-hidden="true"></a>
                            <input name={sectionName} id={itemName} onChange={this.changeItem} style={textStyle} type="text" value={section[itemName].displayName} />
                        </div>
                    )
                }
            }

            inventoryList.push(
                <div key={sectionName}>
                    <h3>{sectionName}</h3>
                    <div>{sectionList}</div>
                </div>
            )
        }

        return (
            <div onBlur={this.sendChangeToGameState}>
                <h2> Inventory </h2>
                {inventoryList}
            </div>
        )      
    }
}