const initialTokenState = [
    {
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
        inventory:[
            {
                "displayName": "Long Bow",
                "icon":"",
                "count": 1
            },
            {
                "displayName": "Leather Armor",
                "icon":"",
                "count": 1
            },
            {
                "displayName": "Small Health Potion",
                "icon":"",
                "count": 4
            }
        ],
        skills:[
            {
                "displayName":"Melee Attack",
                "icon":"weapon-icons-64/sword_air_64.png"
            },
            {
                "displayName":"Hunker down",
                "icon":"weapon-icons-64/shield_air_64.png"
            }
        ]
    },
    {
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
        inventory:[
            {
                "displayName": "Long Bow",
                "icon":"",
                "count": 1
            },
            {
                "displayName": "Leather Armor",
                "icon":"",
                "count": 1
            },
            {
                "displayName": "Small Health Potion",
                "icon":"",
                "count": 4
            }
        ],
        skills:[
            {
                "displayName":"Melee Attack",
                "icon":"weapon-icons-64/sword_air_64.png"
            },
            {
                "displayName":"Hunker down",
                "icon":"weapon-icons-64/shield_air_64.png"
            }
        ]
    }
];

const initialMapsConfigState = {
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
    playMap : "https://s-media-cache-ak0.pinimg.com/originals/40/99/94/40999419d04ec98f34f6039c5c28b261--dungeon-tiles-wilderness.jpg"
}

export const initialState = {
    mapsConfig: initialMapsConfigState,
    tokens: initialTokenState
};
