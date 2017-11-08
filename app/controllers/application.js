import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		searchForSubreddits(event) {
			event.preventDefault();
			let keywords = this.get('keywords'); //Same as the keywords in the .hbs file
			this.transitionToRoute('subreddit', keywords);
		},
		markAsRead() {
			// ajax calls
			this.set('read', true);
			console.log(this.read);
		}
	}
});
