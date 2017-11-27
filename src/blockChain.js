const Block = require('./block');

module.exports =  class Blockchain {
    constructor() {
        this.transactionChain = [this.returnGenesisBlock()];

    }

    returnGenesisBlock() {
        return new Block(0, new Date().getTime().valueOf(), 'First Block', '0');
    }

    returnLatestBlock() {
        return this.transactionChain[this.transactionChain.length -1];
    }

    addNewTransactionBlockToTransactionChain(currentBlock) {
        currentBlock.previousTransactionHash = this.returnLatestBlock().currentTransactionHash;
        currentBlock.currentTransactionHash = currentBlock.calculateBlockDigest();
        this.transactionChain.push(currentBlock);
    }
}