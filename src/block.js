const SHA256 = require('crypto-js/sha256');

module.exports = class Block {
    constructor(blockId, dateTimeStamp, transactionData, previousTransactionHash) {
        this.blockId = blockId;
        this.dateTimeStamp = dateTimeStamp;
        this.transactionData = transactionData;
        this.previousTransactionHash = previousTransactionHash;
        this.currentTransactionHash = this.calculateBlockDigest();
    }

    calculateBlockDigest() {
        return SHA256(this.blockId + this.previousTransactionHash + this.dateTimeStamp + JSON.stringify(this.transactionData)).toString();
    }
}