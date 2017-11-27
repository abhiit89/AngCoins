const SHA256 = require('crypto-js/sha256');

module.exports =  class Block {
    constructor(blockId, dateTimeStamp, transactionData, previousTransactionHash) {
        this.blockId = blockId;
        this.dateTimeStamp = dateTimeStamp;
        this.transactionData = transactionData;
        this.previousTransactionHash = previousTransactionHash;
        this.currentTransactionHash = this.calculateBlockDigest();
        this.nonce = 0;
    }

    calculateBlockDigest() {
        return SHA256(this.blockId + this.previousTransactionHash + this.dateTimeStamp + JSON.stringify(this.transactionData) + this.nonce).toString();
    }

    mineNewBlock(difficulty) {
            while(this.currentTransactionHash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
                this.nonce++;
                this.currentTransactionHash = this.calculateBlockDigest();
            }
            console.log('New Block Mined --> ' + this.currentTransactionHash);
    }
}