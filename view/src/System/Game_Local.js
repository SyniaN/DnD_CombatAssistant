let localState = {
    charId : "",
    uuid : "",
    selectedCharacter: null
};

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

export function getLocalState(){
    return localState;
}