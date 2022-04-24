import event from './emitter.js';

event.on('stock-price', (data) => console.log(`Stock Price: $${data}`));
