import {helper} from '@ember/component/helper';

function search(args){
    let [search_item,monstername]=args;
    if(search_item==undefined){
        return true;
    }
    return monstername.startsWith(search_item);
}
export default helper(search);