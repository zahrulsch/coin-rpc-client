// import BlockChain from "./lib/rpc-client/blockchain.js"
// import Transaction from "./lib/rpc-client/transaction.js"
export { ClientError } from "./error.js";
export { Address, BlockChain, Transaction, makeRequest, rpcConfig, } from "./lib/index.js";
export { Block, BlockCount, BlockHash, DecodedTransaction, RawTransaction } from "./model/index.js";
// async function main() {
//     const blockCount = await BlockChain.getBlockCount()
//     console.assert(blockCount.result > 50_000, "")
//     const blockHash = await BlockChain.getBlockHash(54231)
//     console.assert(
//         blockHash.result == "000000011fc62f97f5135c54a08e280ce76405bce60b8102b0e0a7821f074105",
//         `BlockHash actual is ${blockHash.result}`
//     )
//     const blockInfo = await BlockChain.getBlock(blockHash.result)
//     console.assert(
//         blockInfo.result.tx.length === 2,
//         `BlockInfo ${blockHash.result}, actual tx.length = ${blockInfo.result.tx.length}`
//     )
//     console.assert(
//         blockInfo.result.tx.toString() ===
//             "702fab0befe3af5b9c786ac37f54f9d4e48f410db0231297e9256eefea6ded4b,921285984624f51eacb0fe846e10cacd652447a45fe824cc4d66362aa8db9060",
//         blockInfo.result.tx.toString()
//     )
//     console.log(blockInfo.result)
//     const txs = blockInfo.result.tx
//     for (let idx = 0; idx < txs.length; idx++) {
//         const tx = txs[idx]
//         const transaction = await Transaction.getTransaction(tx)
//         console.log(JSON.stringify(transaction.result, null, 2))
//     }
// }
