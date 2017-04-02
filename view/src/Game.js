import { publishMessage } from './Networking.js';

let gameState = {
    v: 0,
    mapScale: {
        width: 1920,
        height: 1080,
        tileSize: 60
    },
    selectedCharacter: null,
    fogOfWar: {
        foggerSelected: false,
        foggerMode: "Add",
        inAction: false,
        status: []
    },
    mapOptions:{
        fogOfWar: true,
        gridLines: true,
        gridLabels: true
    },
    playMap : "https://lh3.googleusercontent.com/xAMcUtvPvR6Rh51ii7zZdgeV9uZP0j47CaDZlmMza7sCy-dC9Mz6UYRtrWoU9EqEiL0VvChUDhsMUEs=w1920-h1200-no",
    nextId : null,
    tokens: [
        {
            id: 0,
            name: "Asher",
            position: [1, 0],
            color: "#5b4c42",
            icon: "4.png"
        },
        {
            id: 1,
            name: "Clive",
            position: [1, 1],
            color: "#70819e",
            icon: "2.png"
        },
        {
            id: 2,
            name: "Legolas",
            position: [1, 2],
            color: "#649180",
            icon: "10.jpg"
        },
        {
            id: 3,
            name: "Kyle",
            position: [0, 0],
            color: "#879164",
            icon: "3.png"
        },
        {
            id: 4,
            name: "Ovarky",
            position: [0, 1],
            color: "#7c5f8c",
            icon: "5.png"
        },
        {
            id: 5,
            name: "Tarinn",
            position: [0, 2],
            color: "#8c5f5f",
            icon: "9.png"
        }
    ],
    notes: null
};

//INITIALIZATION//
gameState.nextId = gameState.tokens.length;

for (var i = 0; i < Math.floor(gameState.mapScale.height/gameState.mapScale.tileSize); i++){
    gameState.fogOfWar.status[i] = [];
    for(var j = 0; j < Math.floor(gameState.mapScale.width/gameState.mapScale.tileSize); j++){
        gameState.fogOfWar.status[i][j] = true;                
    }
}

let observer = null;


//FUNCTIONS
export function getGameState() {
    return gameState;
}

export function setGameState(newState) {

    console.log('RECEIVED FROM EXTERNAL');
    if (newState.v > gameState.v){
        gameState = newState;
        emitChange(false);
    }
}

export function observe(o) {
    if (observer) {
        throw new Error('Multiple observers not implemented.');
    }

    observer = o;
    emitChange(true);
}

export function changeFogStatus(i, j, status){
    gameState.fogOfWar.status[i][j] = status;
    emitChange(true);
}

function emitChange(internalChange) {
    if (internalChange){
        gameState.v ++;
        publishMessage(gameState);
    }
    observer(gameState.playMap, gameState.mapOptions, gameState);

    console.log(gameState);
    console.log('emitting Change');
}

export function movePiece(toX, toY) {
    if (gameState.selectedCharacter !== null) {
        gameState.tokens[gameState.selectedCharacter].position = [toX, toY];
        emitChange(true);
    }
}

export function changeMapScale(newMapScale) {
    gameState.mapScale = {
        width: newMapScale.width ? newMapScale.width : gameState.mapScale.width,
        height: newMapScale.height ? newMapScale.height : gameState.mapScale.height,
        tileSize: newMapScale.tileSize ? newMapScale.tileSize : gameState.mapScale.tileSize,
    };
    emitChange(true);
}

export function changeMap(newUrl) {
    gameState.playMap = newUrl;
    emitChange(true);
}

export function changeMapOptions(newOptions) {
    gameState.mapOptions = newOptions;
    emitChange(true);
}

export function selectCharacter(id) {
    gameState.selectedCharacter = id;
    console.log(gameState.selectedCharacter);
}

export function deselectCharacter() {
    gameState.selectedCharacter = null;
    emitChange(true);
    console.log("deselected Character");
}

export function addCharacter(character) {
    gameState.tokens.push({
        id: gameState.nextId,
        name: character.name,
        position: character.position,
        color: character.color
    });

    gameState.nextId++;

    emitChange(true);
}

export function removeCharacter(id) {
    gameState.tokens[id].position = [-1, -1];
    deselectCharacter();
    emitChange(true);
}

export function selectFogger() {
    console.log('selectFogger()');
    gameState.fogOfWar.foggerSelected = true;
    emitChange(true);
}

export function deselectFogger() {
    console.log('deselectFogger()');
    gameState.fogOfWar.foggerSelected = false;
    emitChange(true);
}

export function setFoggerMode(state) {
    console.log('setFoggerMode(' + state + ')');
    gameState.fogOfWar.foggerMode = state;
    emitChange(true);
}

export function activateFogger() {
    console.log('activateFogger()');
    gameState.fogOfWar.inAction = true;
    emitChange(true);
}

export function deactivateFogger() {
    console.log('deactivateFogger()');
    gameState.fogOfWar.inAction = false;
    emitChange(true);
}


