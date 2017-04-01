import PubNub from 'pubnub';
import { setGameState } from './Game';

const pubnub = new PubNub({
    publish_key: 'pub-c-eb57f2e7-faee-44ec-b40a-58c6bb62fe90',
    subscribe_key: 'sub-c-8fda7208-16c6-11e7-a9ec-0619f8945a4f',
    ssl: true,
    uuid: PubNub.generateUUID()
});

console.log( "UUID: " + pubnub.getUUID());

pubnub.addListener({
    message: function (message) {
        console.log('RECEIVING');
        console.log(message);
        if (message.publisher !== pubnub.getUUID()){
            setGameState(message.message);
        }
    }
})

console.log("Subscribing..");
pubnub.subscribe({
    channels: ['ReactChat']
});


export function publishMessage(outMessage) {
    console.log('PUBLISHING');
    console.log(outMessage);
    pubnub.publish({
        channel: ['ReactChat'],
        message: outMessage
    });
}