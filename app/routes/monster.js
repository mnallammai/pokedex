import Route from '@ember/routing/route';


export default class MonsterRoute extends Route {
    async model(){
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=200');
        const result = await response.json();
        
         console.log(typeof result);
        // console.log(result.results[0].name);
        return result;
    }
}
