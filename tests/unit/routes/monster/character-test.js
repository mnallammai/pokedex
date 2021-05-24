import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | monster/character', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:monster/character');
    assert.ok(route);
  });
});
