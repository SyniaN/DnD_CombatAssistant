let localState = {
    charId : "",
    uuid : "",
    selectedCharacter: null,
    icons: [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.png",
        "8.png",
        "9.png",
        "10.jpg"
        ]
};

export function getLocalState(){
    return localState;
}

export function deselectLocalCharacter(){
    localState.selectedCharacter = null;    
}

export function selectLocalCharacter(id){
    localState.selectedCharacter = id;
}

export function setLocalcharId(newId){
    localState.charId = newId;
}

export function setLocalUuid(newUuid){
    localState.uuid = newUuid;
}

