import { nanoid } from "nanoid";
import { Block, BlockCount, BlockHash } from "../../model/rpc-response/blockchain.js";
import { makeRequest } from "../make-request.js";
class BlockChain {
    static async getBlockCount() {
        const payload = { method: "getblockcount", id: nanoid(15) };
        return await makeRequest(payload, BlockCount);
    }
    static async getBlockHash(blockIndex) {
        const payload = { method: "getblockhash", id: nanoid(15), params: [] };
        if (typeof blockIndex === "number") {
            payload.params = [blockIndex];
        }
        else {
            payload.params = blockIndex;
        }
        return await makeRequest(payload, BlockHash);
    }
    static async getBlock(blockHash) {
        const payload = { method: "getblock", id: nanoid(15), params: [] };
        if (typeof blockHash === "string") {
            payload.params = [blockHash];
        }
        else {
            payload.params = blockHash;
        }
        return await makeRequest(payload, Block);
    }
}
export default BlockChain;
