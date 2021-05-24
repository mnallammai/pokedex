import { capitalize } from '@ember/string';

import { helper } from '@ember/component/helper';

function capitaliz(args){
    let [str]=args;
    return capitalize(str);
    
}
export default helper(capitaliz);