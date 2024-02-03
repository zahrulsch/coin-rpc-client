declare class Transaction {
    static getRawTransaction(txid: string): Promise<{
        result: string;
        id: string;
        error?: any;
    }>;
    static getTransaction(txid: string): Promise<{
        result: {
            size: number;
            version: number;
            txid: string;
            locktime: number;
            vin: ({
                txid: string;
                vout: number;
                scriptSig: {
                    asm: string;
                    hex: string;
                };
                sequence: number;
            } | {
                sequence: number;
                coinbase: string;
            })[];
            vout: {
                value: number;
                valueSat: number;
                n: number;
                scriptPubKey: {
                    type: string;
                    asm: string;
                    hex: string;
                    reqSigs: number;
                    addresses: string[];
                };
            }[];
        };
        id: string;
        error?: any;
    }>;
    static decodeRawTransaction(hex: string): Promise<{
        result: {
            size: number;
            version: number;
            txid: string;
            locktime: number;
            vin: ({
                txid: string;
                vout: number;
                scriptSig: {
                    asm: string;
                    hex: string;
                };
                sequence: number;
            } | {
                sequence: number;
                coinbase: string;
            })[];
            vout: {
                value: number;
                valueSat: number;
                n: number;
                scriptPubKey: {
                    type: string;
                    asm: string;
                    hex: string;
                    reqSigs: number;
                    addresses: string[];
                };
            }[];
        };
        id: string;
        error?: any;
    }>;
}
export default Transaction;
