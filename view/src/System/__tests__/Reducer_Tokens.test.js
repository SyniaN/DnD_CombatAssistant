/*global expect*/

import {tokens} from '../Reducer_Tokens';
import * as creator from '../ActionCreators';

test('testing addToken', () => {
    var action = creator.addToken("uuid", "tokenType", "positionX", "positionY",
                            "color", "icon", "width", "height",
                            "name", "hp", "hpMax", "mp", "mpMax", "experience",
                            "experienceMax", "ac");
                            
    expect(tokens([{name:"Bob"}], action)).toEqual(
        [   {name:"Bob"}, {
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
    		}	]
    );
});

test('testing removeToken', () => {
    var action = creator.removeToken(0);
    expect(tokens([{id:1},{id:0},{id:3}], action)).toEqual([{id:1},{id:3}]);
});

test('testing replaceToken', ()=>{
    var action = creator.replaceToken(0, {name:"Bob"});
    var state = [{id: 0, name:"John", age:"23"},{id: 1, name:"cat"}];
    var expectedResult = [{name:"Bob"},{id: 1, name:"cat"}];
    expect(tokens(state, action)).toEqual(expectedResult);
});

test('testing moveToken', () => {
    var action = creator.moveToken(1, 4, 6);
    var state = [   {id:0, position:[3, 6]},
                    {id:4, position:[7, 9]},
                    {id:1, position:[8, 4]}
                ];
    var result = [
                    {id:0, position:[3, 6]},
                    {id:4, position:[7, 9]},
                    {id:1, position:[4, 6]}
                ];
    expect(tokens(state,action)).toEqual(result);
});

test('testing incrementInventoryItem', ()=>{
    var action = creator.incrementInventoryItem(0, "blade");
    var state=  [
                    {
                        id:0,
                        inventory:[
                            {
                                displayName:"blade",
                                count:4
                            },
                            {
                                displayName:"longBow",
                                count:0
                            }
                        ]
                    },
                    {
                        id:1,
                        inventory:[
                            {
                                displayName:"blade",
                                count:3
                            }
                        ]
                    }
                ]
    var expectedResult = [
                            {
                                id:0,
                                inventory:[
                                    {
                                        displayName:"blade",
                                        count:5
                                    },
                                    {
                                        displayName:"longBow",
                                        count:0
                                    }
                                ]
                            },
                            {
                                id:1,
                                inventory:[
                                    {
                                        displayName:"blade",
                                        count:3
                                    }
                                ]
                            }
                        ]
    expect(tokens(state, action)).toEqual(expectedResult);
});

test('testing decrementInventoryItem', ()=>{
    var action = creator.decrementInventoryItem(0, "blade");
    var state=  [
                    {
                        id:0,
                        inventory:[
                            {
                                displayName:"blade",
                                count:4
                            },
                            {
                                displayName:"longBow",
                                count:0
                            }
                        ]
                    },
                    {
                        id:1,
                        inventory:[
                            {
                                displayName:"blade",
                                count:3
                            }
                        ]
                    }
                ]
    var expectedResult = [
                            {
                                id:0,
                                inventory:[
                                    {
                                        displayName:"blade",
                                        count:3
                                    },
                                    {
                                        displayName:"longBow",
                                        count:0
                                    }
                                ]
                            },
                            {
                                id:1,
                                inventory:[
                                    {
                                        displayName:"blade",
                                        count:3
                                    }
                                ]
                            }
                        ]
    expect(tokens(state, action)).toEqual(expectedResult);
});

test('testing addInventoryItem', ()=>{
    var action = creator.addInventoryItem(1, "bag", "icon.jpg");
    var state = [{id:0, inventory:[{}]}, {id: 1, inventory:[{}]}];
    var expectedResult =[
                            {id:0, inventory:[{}]},
                            {id: 1, inventory:[{},{
                                displayName : "bag",
                                icon: "icon.jpg",
                                count: 0
                            }]}
                        ];
    expect(tokens(state, action)).toEqual(expectedResult);
});

test('testing removeInventoryItem', ()=>{
    var action = creator.removeInventoryItem(1, "knife");
    var state = [
                    {id:0, inventory:[{displayName:"knife"}]},
                    {id: 1, inventory:[{displayName:"knife"}, {displayName: "book"}]}
                ];
    var expectedResult =    [
                                {id:0, inventory:[{displayName:"knife"}]},
                                {id: 1, inventory:[{displayName: "book"}]}
                            ];
    expect(tokens(state, action)).toEqual(expectedResult);
});



