import { helper } from '@ember/component/helper';

function getImageUrl(args) {
    
    let [index] = args;
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+index+".png";
    console.log(imgUrl);
    // for(let i=0;i<100;i++){
    //     const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + index);
    //     const result = await response.json();
    //     let array=[];
    //     array.push(result.sprites.front_shiny);
    //     console.log(array[i]);

    // }
    
    return imgUrl;

}
export default helper(getImageUrl);