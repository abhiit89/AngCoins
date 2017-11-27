const Blockchain = require('./blockChain');
const uuid = require('uuid');
const Block = require('./block');

let angCoin = new Blockchain();
console.log('Is BlockChain Valid after genesis Block? ' + angCoin.isBlockChainValid());
angCoin.addNewTransactionBlockToTransactionChain(new Block(uuid(), new Date().getTime().valueOf(), {amount : '4$'}));
console.log('Is BlockChain Valid after first Block? ' + angCoin.isBlockChainValid());
angCoin.addNewTransactionBlockToTransactionChain(new Block(uuid(), new Date().getTime().valueOf(), {amount : '10$'}));
console.log('Is BlockChain Valid after second Block? ' + angCoin.isBlockChainValid());
console.log('Blockchain so far ');
// console.log(JSON.stringify(angCoin, null, 4));
console.log('Tampering the Data of the First Block (not Genesis Block)');
angCoin.transactionChain[1].transactionData = {amount : '$100'};
console.log('Is BlockChain Valid after Tampering? ' + angCoin.isBlockChainValid());

