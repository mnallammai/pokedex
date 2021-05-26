import Route from '@ember/routing/route';

export default class MonsterCharacterRoute extends Route {
    async model(params){
        let {monster_id}=params;
       
        const [characterResponse, speciesResponse] = await Promise.all([fetch('https://pokeapi.co/api/v2/pokemon/'+monster_id),
                                                                        fetch('https://pokeapi.co/api/v2/pokemon-species/'+monster_id)]);
        const characterResult=await characterResponse.json();
        const speciesResult=await speciesResponse.json();
        
        // console.log(typeof(result));
        
        // console.log(monster_id);
        return {characterResult,speciesResult};
    }
}

// let {monster_id}=params;
       
//         const response=await fetch('https://pokeapi.co/api/v2/pokemon/'+monster_id);
        
//         const result=await response.json();
        
//         // console.log(typeof(result));
//         console.log(result);
//         // console.log(monster_id);
//         return result;