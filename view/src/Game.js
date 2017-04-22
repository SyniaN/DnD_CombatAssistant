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
    tokens: {
        0:{
            id: 0,
            tokenType: "player",
            name: "Asher",
            position: [14, 9],
            color: "#5b4c42",
            icon: "4.png",
            hp:"25",
            maxHp:"30",
            ac:"19",
            notes:"Remaining lay-on-hands: 7",
            width:"60px",
            height:"60px"
        },
        1: {
            id: 1,
            tokenType: "player",
            name: "Clive",
            position: [11, 11],
            color: "#70819e",
            icon: "2.png",
            hp:"10",
            maxHp:"12",
            ac:"14",
            notes:"Hiding under a rock",
            width:"60px",
            height:"60px"
        },
        2: {
            id: 2,
            tokenType: "player",
            name: "Legolas",
            position: [8, 10],
            color: "#649180",
            icon: "10.jpg",
            hp:"10",
            maxHp:"12",
            ac:"14",
            notes:"Eating cake",
            width:"60px",
            height:"60px"
        },
        3: {
            id: 3,
            tokenType: "player",
            name: "Kyle",
            position: [13, 5],
            color: "#879164",
            icon: "3.png",
            hp:"8",
            maxHp:"12",
            ac:"14",
            notes:"MIA",
            width:"60px",
            height:"60px"
        },
        4: {
            id: 4,
            tokenType: "player",
            name: "Ovarky",
            position: [17, 12],
            color: "#7c5f8c",
            icon: "5.png",
            hp:"15",
            maxHp:"25",
            ac:"18",
            notes:"Channel Divinity: 1",
            width:"60px",
            height:"60px"
        },
        5: {
            id: 5,
            tokenType: "player",
            name: "Tarinn",
            position: [10, 8],
            color: "#8c5f5f",
            icon: "9.png",
            hp:"14",
            maxHp:"20",
            ac:"12",
            notes:"Slowed - Carrying way too much money",
            width:"60px",
            height:"60px"
        },
        6: {
            id: 6,
            tokenType: "player",
            name: "Alimar",
            position: [12, 9],
            color: "#8a7f5c",
            icon:"1.png",
            hp:"16",
            maxHp:"24",
            ac:"10",
            notes:"Magical Shield: 20",
            width:"60px",
            height:"60px"
        },
        7: {
            id: 7,
            tokenType: "npc",
            name: "Half-Dragon",
            position: [23, 5],
            color: "white",
            icon: "monster2.png",
            hp:"",
            maxHp:"",
            ac:"",
            notes:"",
            width:"120px",
            height:"120px"
        }
    },
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

export function addToken(token) {

    gameState.tokens[gameState.nextId] = {
        ...token,
        id: gameState.nextId,
    };

    gameState.nextId++;

    emitChange(true);
}

export function removeToken(id) {
    if (db) console.log("deleteing " + id);
    delete gameState.tokens[id]
    deselectCharacter();
    emitChange(true);
}

export function editToken(token) {
    if(db) console.log("editing " + token.id);
    gameState.tokens[token.id] = token;
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


