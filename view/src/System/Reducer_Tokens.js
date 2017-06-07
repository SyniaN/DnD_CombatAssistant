import {initialState} from './InitialState';

export function tokens(state = initialState.tokens, action){
    switch (action.type){
        case "ADD_TOKEN":
            return [
                ...state, 
                {
                    "id": Object.keys(state).length,
                    "uuid": action.uuid,
                    "tokenType": action.tokenType,
                    "position": [
                        action.positionX,
                        action.positionY
                    ],
                    "color": action.color,
                    "icon": action.icon,
                    "width": action.width,
                    "height": action.height,
                    stats: {
                        "name": {
                            "displayName": "Name",
                            "value" : action.name
                        },
                        "hp": {
                            "displayName": "HP",
                            "value" : action.hp
                        },
                        "maxHp":{
                            "displayName": "Max HP",
                            "value" : action.hpMax
                        },
                        "mp": {
                            "displayName": "Spell Count",
                            "value" : action.mp
                        },
                        "maxMp":{
                            "displayName": "Max Spell Count",
                            "value": action.mpMax
                        },
                        "experience": {
                            "displayName": "Experience",
                            "value": action.experience
                        },
                        "experienceMax": {
                            "displayName": "Max Experience",
                            "value": action.experienceMax
                        },
                        "ac": {
                            "displayName": "Armor",
                            "value" : action.ac
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
                }
            ]
        case "REMOVE_TOKEN":
            return state.filter( (token, index) => token.id !== action.id);
        case "REPLACE_TOKEN":
            return state.map( (token, index) => {
                
                if(token.id !== action.id) {
                    // This isn't the item we care about - keep it as-is
                    return token;
                }
                
                // Otherwise, this is the one we want - return an updated value
                return action.newToken;    
            });
        case "MOVE_TOKEN":
            return state.map( (token, index) => {
                if (token.id !== action.id){
                    return token;
                }
                
                return {
                    ...token,
                    position: [action.xVal, action.yVal]
                };
            });
        case "INCREMENT_INVENTORY_ITEM":
            return state.map( (token, index) => {
                if (token.id !== action.id){
                    return token;
                }
                
                return {
                    ...token,
                    inventory: 
                        token.inventory.map( (item, index) => {
                            if (item.displayName !== action.itemName){
                                return item;
                            }
                            
                            return {
                                ...item,
                                count: item.count+1
                            };
                        })
                };
            });
        case "DECREMENT_INVENTORY_ITEM":
            return state.map( (token, index) => {
                if (token.id !== action.id){
                    return token;
                }
                
                return {
                    ...token,
                    inventory: 
                        token.inventory.map( (item, index) => {
                            if (item.displayName !== action.itemName){
                                return item;
                            }
                            
                            return {
                                ...item,
                                count: item.count-1
                            };
                        })
                };
            });  
        case "ADD_INVENTORY_ITEM":
            return state.map( (token, index) => {
                if (token.id !== action.id){
                    return token;
                }
                
                return {
                    ...token,
                    inventory: [
                        ...token.inventory,
                        {
                            displayName: action.item,
                            icon: action.icon,
                            count: 0
                        }
                    ]
                };
            });
        case "REMOVE_INVENTORY_ITEM":
            return state.map( (token, index) => {
                if (token.id !== action.id){
                    return token;
                }
                
                return {
                    ...token,
                    inventory: 
                        token.inventory.filter( (item, index) => item.displayName !== action.item)
                }
            });
        default:
            return state;            
    }
}