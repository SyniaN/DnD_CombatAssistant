import {tokens} from '../Reducer_Tokens';
import {removeToken} from '../ActionCreators';

test('testing removeToken', () => {
    var action = {type:"REMOVE_TOKEN", id:0}
    expect(tokens([0,1,2], action)).toEqual([1,2]);
});

