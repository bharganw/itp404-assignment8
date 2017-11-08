import Route from '@ember/routing/route';

import $ from 'jquery';

export default Route.extend({
	model(params) {
		let keywords = params.keywords;
		let url = `https://www.reddit.com/r/${keywords}.json`;
		return $.getJSON(url);
	}
});