const gaze = require('gaze');

console.log('--- gaze ---');

gaze('./target.js', (err, watcher)=>{
	console.log('gaze!', err);
	watcher.on('all', (eventType, path)=>{
		console.log('gaze', eventType, path);
	});
});
