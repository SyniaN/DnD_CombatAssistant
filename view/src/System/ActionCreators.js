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
}

//***ActionTypes ***//
const ADD_TOKEN = "ADD_TOKEN";
const REMOVE_TOKEN = "REMOVE_TOKEN";
const EDIT_PLAYMAP = "EDIT_PLAYMAP";

//***Action Creators ***//
export const addToken = makeActionCreator(ADD_TOKEN,
                            "uuid", "tokenType", "positionX", "positionY",
                            "color", "icon", "width", "height",
                            "name", "hp", "hpMax", "mp", "mpMax", "experience",
                            "experienceMax", "ac");
export const removeToken = makeActionCreator(REMOVE_TOKEN, "id");
export const editPlayMap = makeActionCreator(EDIT_PLAYMAP, "playMapUrl");



                                             