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
                "experience": {
    			    "displayName": "Experience",
    			    "value": "30"
    			},
    			"experienceMax": {
    			    "displayName": "Max Experience",
    			    "value": "60"
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
            },
            inventory:{
                "Weapons":[],
                "Armor":[],
                "Consumables":[],
                "Other":[]
            },
            skills:{
                "Melee Attack":{
                    icon:"weapon-icons-64/sword_air_64.png"
                },
                "Ranged Attack":{
                    icon:"weapon-icons-64/bow_air_64.png"
                },
                "Hunker down":{
                    icon:"weapon-icons-64/shield_air_64.png"
                }
            }
		},
		1: {
			"id": 1,
			"tokenType": "player",
			"position": [
				9,
				10
			],
			"color": "#57b6f2",
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
    			    "value" : "15"
    			},
                "maxHp":{
                    "displayName": "Max HP",
                    "value" : "30"
                },
    			"mp": {
    			    "displayName": "MP",
    			    "value" : "8"
    			},
                "maxMp":{
                    "displayName": "Max MP",
    			    "value": "10"
                },
                "experience": {
    			    "displayName": "Experience",
    			    "value": "30"
    			},
    			"experienceMax": {
    			    "displayName": "Max Experience",
    			    "value": "60"
    			},
    			"ac": {
    			    "displayName": "Armor",
    			    "value" : "6"
    			}
            },
            alerts:{
                "alert1": "Frightened",
                "alert2": "Poisoned",
                "alert3": "",
                "alert4": ""
            },
            inventory:{
                "Weapons":[
                    {
                        "displayName": "Long Bow",
                        "icon":"",
                        "count": 1
                    },
                    {
                        "displayName":"Dagger",
                        "icon":"",
                        "count": 2
                    }
                    
                ],
                "Armor":[
                    {
                        "displayName": "Leather Armor",
                        "icon":"",
                        "count": 1
                    }
                ],
                "Consumables":[
                    {
                        "displayName": "Small Health Potion",
                        "icon":"",
                        "count": 4
                    },
                    {
                        "displayName": "Large Mana Potion",
                        "icon":"",
                        "count":2
                    }
                ],
                "Other":[
                    {
                        "displayName": "Lucky Pendant",
                        "icon":"",
                        "count": 1
                    }
                ]
            },
            skills:{
                "Melee Attack":{
                    icon:"weapon-icons-64/sword_air_64.png"
                },
                "Ranged Attack":{
                    icon:"weapon-icons-64/bow_air_64.png"
                },
                "Hunker down":{
                    icon:"weapon-icons-64/shield_air_64.png"
                }
            }
		}
    }
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
        "uuid": token.uuid,
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
            "experience": {
			    "displayName": "Experience",
			    "value": token.experience
			},
			"experienceMax": {
			    "displayName": "Max Experience",
			    "value": token.experienceMax
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
        },
        inventory:{
            "Weapons":[
                {
                    "displayName": "Long Bow",
                    "icon":"",
                    "count": 1
                },
                {
                    "displayName":"Dagger",
                    "icon":"",
                    "count": 2
                }
                
            ],
            "Armor":[
                {
                    "displayName": "Leather Armor",
                    "icon":"",
                    "count": 1
                },
                {
                    "displayName": "",
                    "icon":"",
                    "count": 0
                }
            ],
            "Consumables":[
                {
                    "displayName": "Small Health Potion",
                    "icon":"",
                    "count": 4
                },
                {
                    "displayName": "Large Mana Potion",
                    "icon":"",
                    "count":2
                }
            ],
            "Other":[
                {
                    "displayName": "Lucky Pendant",
                    "icon":"",
                    "count": 1
                },
                {
                    "displayName": "",
                    "icon":"",
                    "count": 0
                }
            ]
        },
        skills:{
                "Melee Attack":{
                    icon:"weapon-icons-64/sword_air_64.png"
                },
                "Ranged Attack":{
                    icon:"weapon-icons-64/bow_fire_64.png"
                },
                "Hunker down":{
                    icon:"weapon-icons-64/shield_acid_64.png"
                }
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

export function incrementTokenInventoryItem(tokenId, section, item){
    gameState.tokens[tokenId].inventory[section][item].count++;
    emitChange(true);
}

export function decrementItemCount(tokenId, section, item){
    gameState.tokens[tokenId].inventory[section][item].count--;
    emitChange(true);
}

export function updateInventory(tokenId, newInventory){
    gameState.tokens[tokenId].inventory = newInventory;
    emitChange(true);
}


