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
			"position": [
				24,
				11
			],
			"width": "120px",
			"height": "120px",
			"color": "white",
			"icon": "monster2.png",
			stats: {
			    "name": {
			        "displayName": "Name",
			        "value" : "Half-Dragon"
			    },
    			"hp": {
    			    "displayName": "HP",
    			    "value" : "10"
    			},
                "maxHp":{
                    "displayName": "Max HP",
                    "value" : "30"
                },
    			"mp": {
    			    "displayName": "Spell Count",
    			    "value" : "1"
    			},
                "maxMp":{
                    "displayName": "Max Spell Count",
    			    "value": "3"
                },
    			"ac": {
    			    "displayName": "Armor",
    			    "value" : "6"
    			},
            },
            alerts:{
                "alert1": "",
                "alert2": "",
                "alert3": "",
                "alert4": ""
            }
		},
		1 : {
			"id": 1,
			"tokenType": "npc",
			"position": [
				18,
				4
			],
			"width": "360px",
			"height": "360px",
			"color": "white",
			"icon": "dragon.png",
			stats: {
			    "name": {
			        "displayName": "Name",
			        "value" : "Ancient Dragon"
			    },
    			"hp": {
    			    "displayName": "HP",
    			    "value" : "10"
    			},
                "maxHp":{
                    "displayName": "Max HP",
                    "value" : "30"
                },
    			"mp": {
    			    "displayName": "Spell Count",
    			    "value" : "1"
    			},
                "maxMp":{
                    "displayName": "Max Spell Count",
    			    "value": "3"
                },
    			"ac": {
    			    "displayName": "Armor",
    			    "value" : "6"
    			}    			
            },
            alerts:{
                "alert1": "",
                "alert2": "",
                "alert3": "",
                "alert4": ""
            }
		},
		2: {
			"id": 2,
			"tokenType": "player",
			"position": [
				9,
				10
			],
			"color": "#ce3131",
			"icon": "3.jpg",
			"width": "60px",
			"height": "60px",
			stats: {
			    "name": {
			        "displayName": "Name",
			        "value" : "Shepard"
			    },
    			"hp": {
    			    "displayName": "HP",
    			    "value" : "10"
    			},
                "maxHp":{
                    "displayName": "Max HP",
                    "value" : "30"
                },
    			"mp": {
    			    "displayName": "Spell Count",
    			    "value" : "1"
    			},
                "maxMp":{
                    "displayName": "Max Spell Count",
    			    "value": "3"
                },
    			"ac": {
    			    "displayName": "Armor",
    			    "value" : "6"
    			}
            },
            alerts:{
                "alert1": "",
                "alert2": "",
                "alert3": "",
                "alert4": ""
            }
		},
		3: {
			"id": 3,
			"tokenType": "player",
			"position": [
				13,
				8
			],
			"color": "#8ad372",
			"icon": "1.jpg",
			"width": "60px",
			"height": "60px",
			stats: {
			    "name": {
			        "displayName": "Name",
			        "value" : "Shepard"
			    },
    			"hp": {
    			    "displayName": "HP",
    			    "value" : "10"
    			},
                "maxHp":{
                    "displayName": "Max HP",
                    "value" : "30"
                },
    			"mp": {
    			    "displayName": "Spell Count",
    			    "value" : "1"
    			},
                "maxMp":{
                    "displayName": "Max Spell Count",
    			    "value": "3"
                },
    			"ac": {
    			    "displayName": "Armor",
    			    "value" : "6"
    			} 
            },
            alerts:{
                "alert1": "",
                "alert2": "",
                "alert3": "",
                "alert4": ""
            }
        }
    },
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

export function changePlayerInfo(id, name, hp){
    gameState.tokens[id].stats.name.value = name;
    gameState.tokens[id].stats.hp.value = hp;
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
    
    var newToken = {
        "id": gameState.nextId,
		"tokenType": token.tokenType,
		"position": [
			token.positionX,
			token.positionY
		],
		"color": token.color,
		"icon": token.icon,
		"width": token.width,
		"height": token.height,
		stats: {
            "name": {
                "displayName": "Name",
                "value" : token.name
            },
            "hp": {
                "displayName": "HP",
                "value" : token.hp
            },
            "maxHp":{
                "displayName": "Max HP",
                "value" : token.hpMax
            },
            "mp": {
                "displayName": "Spell Count",
                "value" : token.mp
            },
            "maxMp":{
                "displayName": "Max Spell Count",
                "value": token.mpMax
            },
            "ac": {
                "displayName": "Armor",
                "value" : token.ac
            }
        },
        alerts:{
                "alert1": "New Player",
                "alert2": "",
                "alert3": "",
                "alert4": ""
            }
    };
    
    gameState.tokens[gameState.nextId] = newToken;
    
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


