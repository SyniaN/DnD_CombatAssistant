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
            return [
                ...state.slice(0, action.id),
                ...state.slice(action.id+1)
            ]
        default:
            return state;            
    }
}