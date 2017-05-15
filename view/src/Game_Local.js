let localState = {
    charId : ""
}

export function setLocalcharId(newId){
    localState.charId = newId;
}

export function getLocalState(){
    return localState;
}