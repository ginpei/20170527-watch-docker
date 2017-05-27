const fs = require('fs');

console.log('--- fs.watch ---');

fs.watch('./target.js', (eventType, filename)=>{
	if (filename) {
		console.log('fs', eventType, filename);
	}
});
