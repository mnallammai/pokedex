import Route from '@ember/routing/route';

export default class MonsterCharacterRoute extends Route {
    async model(params){
        let {monster_id}=params;
       
        const response=await fetch('https://pokeapi.co/api/v2/pokemon/'+monster_id);
        const result=await response.json();
        console.log(typeof result.abilities);
        console.log(result.abilities[0].ability.name);
        
        // console.log(typeof(result));
        console.log(result);
        // console.log(monster_id);
        return result;
    }
}
