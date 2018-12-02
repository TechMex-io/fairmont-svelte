import App from './App.html';
import {store} from './store';

const app = new App({
	target: document.body,
	store,
	data: {
		name: 'world'
	}
});

export default app;