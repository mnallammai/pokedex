import { helper } from '@ember/component/helper';

function increment(args){
    let [index]=args;
    index=index+1;
    console.log(index);
    return index;
    
}
export default helper(increment);