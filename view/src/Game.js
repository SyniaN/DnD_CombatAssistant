let gameState={
    mapScale: {
        width: 1700,
        height: 1000,
        tileSize: 80
    },
    selectedCharacter: null,
    tokens: [
        {
            id: 0,
            name: "Asher",
            position: [1,0],
            color: "#5b4c42",
            icon: "4.png"
        },
        {
            id: 1,
            name: "Clive",
            position: [1, 0],
            color: "#70819e",
            icon: "2.png"
        },
        {
            id: 2,
            name: "Legolas",
            position: [2, 1],
            color: "#649180",
            icon: "10.jpg"
        },
        {
            id: 3,
            name: "Kyle",
            position: [2, 2],
            color: "#879164",
            icon: "3.png"
        },
        {
            id: 4,
            name: "Ovarky",
            position: [3, 0],
            color: "#7c5f8c",
            icon: "5.png"
        },
        {
            id: 5,
            name: "Tarinn",
            position: [5, 0],
            color: "#8c5f5f",
            icon: "9.png"
        }
    ]
};

let nextId = 5;
let playMap = "https://rpgcharacters.files.wordpress.com/2009/07/hthad-map1.jpg";
let mapOptions = {
    fogOfWar: true,
    gridLines: true,
    gridLabels: true
};


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
    observer(playMap, mapOptions, gameState);
    console.log('emitting Change');
}

export function movePiece(toX, toY){
    if (gameState.selectedCharacter !== null ){
        gameState.tokens[gameState.selectedCharacter].position = [toX, toY];
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
    gameState.tokens.push({
        id: nextId,
        name: character.name,
        position: character.position,
        color: character.color
    });
    
    nextId++;
    
    emitChange();
}

export function removeCharacter(id){
    gameState.tokens[id].position = [-1, -1];
    deselectCharacter();
    emitChange();
}
    
  
