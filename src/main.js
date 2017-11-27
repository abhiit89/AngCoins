const Blockchain = require('./blockChain');
const uuid = require('uuid');
const Block = require('./block');

let angCoin = new Blockchain();
angCoin.addNewTransactionBlockToTransactionChain(new Block(uuid(), new Date().getTime().valueOf(), {amount : '4$'}));
angCoin.addNewTransactionBlockToTransactionChain(new Block(uuid(), new Date().getTime().valueOf(), {amount : '10$'}));

console.log(JSON.stringify(angCoin, null, 4));