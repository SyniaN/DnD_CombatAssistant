function makeActionCreator(type, ...argNames){
    return function(...args){
        let action = {type};
        argNames.forEach(function(arg, index){
            action[argNames[index]] = args[index];
        });
        return action;
    }
}

const ADD_CHARACTER = "ADD_CHARACTER";

export const addCharacter = makeActionCreator(ADD_CHARACTER,
                                            "tokenType",
                                            "positionX",
                                            "positionY",
                                            "color",
                                            "icon",
                                            "width",
                                            "height",
                                            "name",
                                            "hp",
                                            "hpMax",
                                            "mp",
                                            "mpMax",
                                            "ac")



                                             