import Service from '@ember/service';

import $ from 'jquery';

export default Service.extend({
	findAllForSubreddit(subreddit) {
		//return $.getJSON(url);
		$.ajax({
			type: 'GET',
			url: `https://www.reddit.com/r/${subreddit}.json`,
		}).then(function(repos) {
			return (repos);
		});
	}
});
