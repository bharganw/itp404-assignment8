import Component from '@ember/component';

export default Component.extend({
	read: false, 
	title: 'Sign up for Spring classes!',
	click() {
		let readToggle = !this.get('read');
		this.set('read', true);
		this.get('clickAction')(readToggle);
	}
});
