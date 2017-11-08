import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
	sortedPosts: Ember.computed('model', function() {
    let posts = this.get('model').data.children;

    let sortedPosts = posts.sort(function(postA, postB) {
      let aUnix = postA.data.score;
      let bUnix = postB.data.score;
      if (aUnix > bUnix) {
        return -1;
      }
      if (aUnix < bUnix) {
        return 1;
      }
      return 0;
    });

    return sortedPosts;
  })
});
