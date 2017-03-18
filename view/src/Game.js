let gameState={
    mapScale: {
        width: 1700,
        height: 1000,
        tileSize: 80
    },
    selectedCharacter: null
};

let nextId = 5;
let playMap = "https://rpgcharacters.files.wordpress.com/2009/07/hthad-map1.jpg";
let mapOptions = {
    fogOfWar: true,
    gridLines: true,
    gridLabels: true
};
let playerPieces = [
    {
        id: 0,
        name: "Asher",
        position: [1,0],
        color: "#7df27f"
    },
    {
        id: 1,
        name: "Clive",
        position: [1, 0],
        color: "#7df27f"
    },
    {
        id: 2,
        name: "Legolas",
        position: [2, 1],
        color: "#7df27f"
    },
    {
        id: 3,
        name: "Kyle",
        position: [2, 2],
        color: "#7df27f"
    },
    {
        id: 4,
        name: "Ovarky",
        position: [3, 0],
        color: "#7df27f"
    }
];

let observer = null;

export function getGameState(){
    return gameState;
}

export function observe(o){
    if (observer){
        throw new Error('Multiple observers not implemented.');
    }
    
    observer = o;
    emitChange();
}

function emitChange(){
    observer(playerPieces, playMap, mapOptions, gameState);
    console.log('emitting Change');
    console.log(playerPieces);
}

export function movePiece(toX, toY){
    if (gameState.selectedCharacter !== null ){
        playerPieces[gameState.selectedCharacter].position = [toX, toY];
        emitChange();
    }
}

export function changeMapScale(newMapScale){
    gameState.mapScale = {
        width: newMapScale.width ? newMapScale.width : gameState.mapScale.width,
        height: newMapScale.height ? newMapScale.height : gameState.mapScale.height,
        tileSize: newMapScale.tileSize ? newMapScale.tileSize : gameState.mapScale.tileSize,
    };
    emitChange();
}

export function changeMap(newUrl){
    playMap = newUrl;
    emitChange();
}

export function changeMapOptions(newOptions){
    mapOptions = newOptions;
    emitChange();
}

export function selectCharacter(id){
    gameState.selectedCharacter = id;
    console.log(gameState.selectedCharacter);
}

export function deselectCharacter(){
    gameState.selectedCharacter = null;
    emitChange();
    console.log("deselected Character");
}

export function addCharacter(character){
    playerPieces.push({
        id: nextId,
        name: character.name,
        position: character.position,
        color: character.color
    });
    
    console.log(playerPieces);
    
    nextId++;
    
    emitChange();
}

export function removeCharacter(id){
    playerPieces[id].position = [-1, -1];
    deselectCharacter();
    emitChange();
}
    
  
