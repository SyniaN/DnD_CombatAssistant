function makeActionCreator(type, ...argNames){
    return function(...args){
        let action = {type};
        argNames.forEach(function(arg, index){
            action[argNames[index]] = args[index];
        });
        return action;
    }
}

//***Other constants ***//
export const tokenTypes ={
    PLAYER: "PLAYER",
    NPC: "NPC",
    OBJECT: "OBJECT"
};

//***Token ActionTypes ***//
const ADD_TOKEN = "ADD_TOKEN";
const REMOVE_TOKEN = "REMOVE_TOKEN";
const REPLACE_TOKEN = "REPLACE_TOKEN";
const MOVE_TOKEN = "MOVE_TOKEN";
////
export const addToken = makeActionCreator(ADD_TOKEN,
                            "uuid", "tokenType", "positionX", "positionY",
                            "color", "icon", "width", "height",
                            "name", "hp", "hpMax", "mp", "mpMax", "experience",
                            "experienceMax", "ac");
export const removeToken = makeActionCreator(REMOVE_TOKEN, "id");
export const replaceToken = makeActionCreator(REPLACE_TOKEN, "id", "newToken");
export const moveToken = makeActionCreator(MOVE_TOKEN, "id", "xVal", "yVal");


//***Inventory ActionTypes***//
const INCREMENT_INVENTORY_ITEM = "INCREMENT_INVENTORY_ITEM";
const DECREMENT_INVENTORY_ITEM = "DECREMENT_INVENTORY_ITEM";
const ADD_INVENTORY_ITEM = "ADD_INVENTORY_ITEM";
const REMOVE_INVENTORY_ITEM = "REMOVE_INVENTORY_ITEM";
////
export const incrementInventoryItem = makeActionCreator(INCREMENT_INVENTORY_ITEM, "id", "itemName");
export const decrementInventoryItem = makeActionCreator(DECREMENT_INVENTORY_ITEM, "id", "itemName");
export const addInventoryItem = makeActionCreator(ADD_INVENTORY_ITEM, "id", "item", "icon");
export const removeInventoryItem = makeActionCreator(REMOVE_INVENTORY_ITEM, "id", "item");

//***Map Action Types***//
const EDIT_PLAYMAP = "EDIT_PLAYMAP";
////
export const editPlayMap = makeActionCreator(EDIT_PLAYMAP, "playMapUrl");