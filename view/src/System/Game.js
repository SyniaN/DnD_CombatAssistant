import { publishMessage } from './Networking.js';
import { getLocalState, selectLocalCharacter, deselectLocalCharacter} from './Game_Local';

const db = true;

let gameState = {
    v: 0,
    mapScale: {
        width: 1920,
        height: 1080,
        tileSize: 60
    },
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
    //playMap : "",
    nextId : null,
    tokens: {
        0 : {
			"id": 0,
			"tokenType": "npc",
			"name": "Half-Dragon",
			"position": [
				24,
				11
			],
			"color": "white",
			"icon": "monster2.png",
			"hp": "50",
			"maxHp": "100",
			"ac": "12",
			"notes": "Stunned",
			"width": "120px",
			"height": "120px"
		},
		1 : {
			"id": 1,
			"tokenType": "npc",
			"name": "Ancient Dragon",
			"position": [
				18,
				4
			],
			"color": "white",
			"icon": "dragon.png",
			"hp": "100",
			"maxHp": "300",
			"ac": "",
			"notes": "",
			"width": "360px",
			"height": "360px"
		},
		2: {
			"id": 2,
			"tokenType": "player",
			"name": "John 1",
			"position": [
				9,
				10
			],
			"color": "#ce3131",
			"icon": "3.png",
			"hp": "100",
			"maxHp": "300",
			"ac": "",
			"notes": "Stunned",
			"width": "60px",
			"height": "60px"
		},
		3: {
			"id": 3,
			"tokenType": "player",
			"name": "Shepard",
			"position": [
				13,
				8
			],
			"color": "#8ad372",
			"icon": "1.png",
			"hp": "100",
			"maxHp": "300",
			"ac": "",
			"notes": "Frightened",
			"width": "60px",
			"height": "60px"
		},

    },
    notes: null
};

//INITIALIZATION//
gameState.nextId = Object.keys(gameState.tokens).length;

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


export function setMyGameState(newState){
    gameState = newState;
    emitChange(true);
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
    observer();

    if (db) console.log(gameState);
    if (db) console.log('emitting Change');
}

export function movePiece(toX, toY) {
    if (getLocalState().selectedCharacter !== null) {
        gameState.tokens[getLocalState().selectedCharacter].position = [toX, toY];
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
    selectLocalCharacter(id);
}

export function deselectCharacter() {
    deselectLocalCharacter();
    emitChange(true);
    if (db) console.log("deselected Character");
}

export function addToken(token) {
    if (db) console.log("adding token: ", token);
    gameState.tokens[gameState.nextId] = {
        ...token,
        id: gameState.nextId,
    };

    var returnId = gameState.nextId;

    gameState.nextId++;

    emitChange(true);

    return returnId;
}

export function removeToken(id) {
    if (db) console.log("deleteing " + id);
    delete gameState.tokens[id]
    deselectCharacter();
    emitChange(true);
}

export function editToken(token) {
    if(db) console.log("editing " + token.id);
    console.log('editing token');
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


