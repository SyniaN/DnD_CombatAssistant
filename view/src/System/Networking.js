import PubNub from 'pubnub';
import { setGameState, getGameState, removeToken } from './Game';
import { setLocalUuid } from './Game_Local';

const db = false;

const pubnub = new PubNub({
    publish_key: 'pub-c-eb57f2e7-faee-44ec-b40a-58c6bb62fe90',
    subscribe_key: 'sub-c-8fda7208-16c6-11e7-a9ec-0619f8945a4f',
    ssl: true,
    uuid: PubNub.generateUUID()
});

pubnub.subscribe({
    channels: ['ReactChat'],
    withPresence: true
});

pubnub.addListener({
    message: function (message) {
        
        // if the incoming message does not belong to this client
        // then set the state to the state in the incoming message
        if (message.publisher !== pubnub.getUUID()){
                setGameState(message.message);
        }
    },
    presence: function(p){
        console.log('presence event came in: ', p);
        var action = p.action;
        var uuid = p.uuid;
        var myState = getGameState();
        
        // if a new client joins the chat, then send the current state
        // to everyone on the channel
        if (action === "join"){
            
            publishMessage(myState);
        }
        
        if (action === "leave"){
            for (var tokenId in myState.tokens){
                var token = myState.tokens[tokenId];
                console.log('token to check for deletion', token);
                if (token.uuid === uuid){
                    console.log('token to delete', token);
                    removeToken(tokenId);
                }
            }
        }
    }
});



export function publishMessage(outMessage) {
    if (db) console.log('PUBLISHING');
    if (db) console.log(outMessage);
    pubnub.publish({
        channel: ['ReactChat'],
        message: outMessage
    });
}

setLocalUuid (pubnub.getUUID());

window.addEventListener("beforeunload", (ev) => 
{  
    pubnub.unsubscribe({
        channels: ['ReactChat']
    })
});