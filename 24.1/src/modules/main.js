import {SyncDelay1} from './syncDelay1.js';
import {Promise1} from './promise1.js';
import {Promise2} from './promise2.js';
import {Xhr1} from './xhr1.js';
import {SetTimeOut1} from './setTimeout1.js';
import {ButtonClick1} from './buttonClick1.js';
import {Fetch1} from './fetch1.js';
import {AsyncAwait1} from './asyncAwait1.js';

console.log('sync code start');
SyncDelay1.seconds = 5;

function Main() {
	this.url = 'https://jsonplaceholder.typicode.com/photos';
	const asyncConstr = [Xhr1, Promise1, Promise2, AsyncAwait1, SetTimeOut1, ButtonClick1, Fetch1];

	const syncConstr = [SyncDelay1];

	this.runAsync(asyncConstr);
	this.runSync(syncConstr);
}

Main.prototype.runAsync = function(elements) {
	elements.forEach(element => {
		new element(element.name)
			.run(this.url)
			.then(logger => logger.logInfo())
			.catch(error => {
				console.log(error);
			});
	});
};

Main.prototype.runSync = function(elements) {
	elements.forEach(element => {
		try {
			new element(element.name).run(this.url).logInfo();
		} catch (error) {
			console.log(error);
		}
	});
	3;
};

new Main();

console.log('sync code end');
