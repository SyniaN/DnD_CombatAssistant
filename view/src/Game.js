let nextId = 5;
let playMap = "http://3.bp.blogspot.com/-ZZb4hn_5Jww/UpOtskYRh4I/AAAAAAAABas/zXX01A8_fIk/s1600/photo-2.jpg";
let playerPieces = [
    {
        id: 0,
        name: "Asher",
        position: [1,0]
    },
    {
        id: 1,
        name: "Clive",
        position: [1, 0]
    },
    {
        id: 2,
        name: "Legolas",
        position: [2, 1]
    },
    {
        id: 3,
        name: "Kyle",
        position: [2, 2]
    },
    {
        id: 4,
        name: "Ovarky",
        position: [3, 0]
    }
];

let observer = null;
let selectedCharacter = null;

export function observe(o){
    if (observer){
        throw new Error('Multiple observers not implemented.');
    }
    
    observer = o;
    emitChange();
}

function emitChange(){
    observer(playerPieces, playMap);
    console.log('emitting Change');
    console.log(playerPieces);
}

export function movePiece(toX, toY){
    if (selectedCharacter !== null ){
        playerPieces[selectedCharacter].position = [toX, toY];
        emitChange();
    }
}

export function changeMap(newUrl){
    playMap = newUrl;
    emitChange();
}

export function selectCharacter(id){
    selectedCharacter = id;
    console.log(selectedCharacter);
}

export function deselectCharacter(){
    selectedCharacter = null;
    console.log("deselected Character");
}

export function addCharacter(character){
    playerPieces.push({
        id: nextId,
        name: character.name,
        position: character.position
    });
    
    console.log(playerPieces);
    
    emitChange();
}

export function removeCharacter(id){
    playerPieces[id].position = [-1, -1];
    emitChange();
}
    
  
