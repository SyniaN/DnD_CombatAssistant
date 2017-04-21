import { publishMessage } from './Networking.js';

const db = false;
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
        fogOfWar: false,
        gridLines: true,
        gridLabels: false
    },
    playMap : "https://s-media-cache-ak0.pinimg.com/originals/40/99/94/40999419d04ec98f34f6039c5c28b261--dungeon-tiles-wilderness.jpg",
    nextId : null,
    tokens: [
        {
            id: 0,
            name: "Asher",
            position: [14, 9],
            color: "#5b4c42",
            icon: "4.png",
            hp:"",
            tempHp:"",
            width:"60px",
            height:"60px"
        },
        {
            id: 1,
            name: "Clive",
            position: [11, 11],
            color: "#70819e",
            icon: "2.png",
            hp:"",
            tempHp:"",
            width:"60px",
            height:"60px"
        },
        {
            id: 2,
            name: "Legolas",
            position: [8, 10],
            color: "#649180",
            icon: "10.jpg",
            hp:"",
            tempHp:"",
            width:"60px",
            height:"60px"
        },
        {
            id: 3,
            name: "Kyle",
            position: [13, 5],
            color: "#879164",
            icon: "3.png",
            hp:"",
            tempHp:"",
            width:"60px",
            height:"60px"
        },
        {
            id: 4,
            name: "Ovarky",
            position: [17, 12],
            color: "#7c5f8c",
            icon: "5.png",
            hp:"",
            tempHp:"",
            width:"60px",
            height:"60px"
        },
        {
            id: 5,
            name: "Tarinn",
            position: [10, 8],
            color: "#8c5f5f",
            icon: "9.png",
            hp:"",
            tempHp:"",
            width:"60px",
            height:"60px"
        },
        {
            id: 6,
            name: "Alimar",
            position: [12, 9],
            color: "#8a7f5c",
            icon:"1.png",
            hp:"",
            tempHp:"",
            width:"60px",
            height:"60px"
        },
        {
            id: 7,
            name: "Half-Dragon",
            position: [23, 5],
            color: "white",
            icon: "monster2.png",
            hp: "",
            tempHp: "",
            width:"120px",
            height:"120px"
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

export function changePlayerInfo(id, name, hp, tempHp){
    gameState.tokens[id].name = name;
    gameState.tokens[id].hp = hp;
    gameState.tokens[id].tempHp = tempHp;
    emitChange(true);
}

//FUNCTIONS
export function getGameState() {
    return gameState;
}

export function setGameState(newState) {

    if (db) console.log('RECEIVED FROM EXTERNAL');
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

    if (db) console.log(gameState);
    if (db) console.log('emitting Change');
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
    if (db) console.log(gameState.selectedCharacter);
}

export function deselectCharacter() {
    gameState.selectedCharacter = null;
    emitChange(true);
    if (db) console.log("deselected Character");
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
    if (db) console.log('selectFogger()');
    gameState.fogOfWar.foggerSelected = true;
    emitChange(true);
}

export function deselectFogger() {
    if (db) console.log('deselectFogger()');
    gameState.fogOfWar.foggerSelected = false;
    emitChange(true);
}

export function setFoggerMode(state) {
    if (db) console.log('setFoggerMode(' + state + ')');
    gameState.fogOfWar.foggerMode = state;
    emitChange(true);
}

export function activateFogger() {
    if (db) console.log('activateFogger()');
    gameState.fogOfWar.inAction = true;
    emitChange(true);
}

export function deactivateFogger() {
    if (db) console.log('deactivateFogger()');
    gameState.fogOfWar.inAction = false;
    emitChange(true);
}


