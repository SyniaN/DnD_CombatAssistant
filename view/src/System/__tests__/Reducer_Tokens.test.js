/*global expect*/

import {tokens} from '../Reducer_Tokens';
import {removeToken, addToken} from '../ActionCreators';

test('testing removeToken', () => {
    var action = {type:"REMOVE_TOKEN", id:0}
    expect(tokens([0,1,2], action)).toEqual([1,2]);
});

test('testing addToken', () => {
    var action = addToken("uuid", "tokenType", "positionX", "positionY",
                            "color", "icon", "width", "height",
                            "name", "hp", "hpMax", "mp", "mpMax", "experience",
                            "experienceMax", "ac");
    expect(tokens([{name:"Bob"}], action)).toEqual(
        [ {name:"Bob"},
            {
    			"id": 1,
    			"uuid": "uuid",
    			"tokenType": "tokenType",
    			"position": [
    				"positionX",
    				"positionY"
    			],
    			"width": "width",
    			"height": "height",
    			"color": "color",
    			"icon": "icon",
    			stats: {
    			    "name": {
    			        "displayName": "Name",
    			        "value" : "name"
    			    },
        			"hp": {
        			    "displayName": "HP",
        			    "value" : "hp"
        			},
                    "maxHp":{
                        "displayName": "Max HP",
                        "value" : "hpMax"
                    },
        			"mp": {
        			    "displayName": "Spell Count",
        			    "value" : "mp"
        			},
                    "maxMp":{
                        "displayName": "Max Spell Count",
        			    "value": "mpMax"
                    },
                    "experience": {
        			    "displayName": "Experience",
        			    "value": "experience"
        			},
        			"experienceMax": {
        			    "displayName": "Max Experience",
        			    "value": "experienceMax"
        			},
        			"ac": {
        			    "displayName": "Armor",
        			    "value" : "ac"
        			},
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
    );
});




