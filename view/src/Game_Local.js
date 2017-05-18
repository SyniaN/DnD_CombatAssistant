let localState = {
    charId : "",
    uuid : ""
};


export function setLocalcharId(newId){
    localState.charId = newId;
}

export function setLocalUuid(newUuid){
    localState.uuid = newUuid;
}

export function getLocalState(){
    return localState;
}