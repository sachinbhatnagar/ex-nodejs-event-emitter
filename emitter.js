import EventEmitter from 'events';

const emitter = new EventEmitter();

setInterval(() => {
  emitter.emit('stock-price', `${(Math.random() * 10000).toFixed(3)}`);
}, 3000);

export default emitter;
