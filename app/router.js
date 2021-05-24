import EmberRouter from '@ember/routing/router';
import config from 'pokedex/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('monster', function() {
    this.route('index',{path:'/'})
    this.route('character',{path:'/:monster_id'});
  });
});
