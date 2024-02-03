declare class BlockChain {
    static getBlockCount(): Promise<{
        result: number;
        id: string;
        error?: any;
    }>;
    static getBlockHash(blockIndex: number | Array<number>): Promise<{
        result: string;
        id: string;
        error?: any;
    }>;
    static getBlock(blockHash: string | Array<string>): Promise<{
        result: {
            hash: string;
            confirmations: number;
            size: number;
            height: number;
            version: number;
            merkleroot: string;
            tx: string[];
            time: number;
            mediantime: number;
            nonce: number;
            bits: string;
            difficulty: number;
            chainwork: string;
            previousblockhash?: string | undefined;
            nextblockhash?: string | undefined;
        };
        id: string;
        error?: any;
    }>;
}
export default BlockChain;
