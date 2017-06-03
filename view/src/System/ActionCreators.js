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

//***Action Creators ***//
export const addToken = makeActionCreator(ADD_TOKEN,
                            "uuid", "tokenType", "positionX", "positionY",
                            "color", "icon", "width", "height",
                            "name", "hp", "hpMax", "mp", "mpMax", "experience",
                            "experienceMax", "ac")



                                             