let localState = {
    charId : "",
    uuid : "",
    selectedCharacter: null,
    icons: [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg"
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

