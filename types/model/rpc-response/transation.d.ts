import { z } from "zod";
export declare const RawTransaction: z.ZodObject<{
    result: z.ZodString;
    error: z.ZodAny;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    result: string;
    id: string;
    error?: any;
}, {
    result: string;
    id: string;
    error?: any;
}>;
export declare const DecodedTransaction: z.ZodObject<{
    result: z.ZodObject<{
        txid: z.ZodString;
        size: z.ZodNumber;
        version: z.ZodNumber;
        locktime: z.ZodNumber;
        vin: z.ZodArray<z.ZodUnion<[z.ZodObject<{
            txid: z.ZodString;
            vout: z.ZodNumber;
            scriptSig: z.ZodObject<{
                asm: z.ZodString;
                hex: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                asm: string;
                hex: string;
            }, {
                asm: string;
                hex: string;
            }>;
            sequence: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            txid: string;
            vout: number;
            scriptSig: {
                asm: string;
                hex: string;
            };
            sequence: number;
        }, {
            txid: string;
            vout: number;
            scriptSig: {
                asm: string;
                hex: string;
            };
            sequence: number;
        }>, z.ZodObject<{
            coinbase: z.ZodString;
            sequence: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            sequence: number;
            coinbase: string;
        }, {
            sequence: number;
            coinbase: string;
        }>]>, "many">;
        vout: z.ZodArray<z.ZodObject<{
            value: z.ZodNumber;
            valueSat: z.ZodNumber;
            n: z.ZodNumber;
            scriptPubKey: z.ZodObject<{
                asm: z.ZodString;
                hex: z.ZodString;
                reqSigs: z.ZodNumber;
                type: z.ZodString;
                addresses: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                type: string;
                asm: string;
                hex: string;
                reqSigs: number;
                addresses: string[];
            }, {
                type: string;
                asm: string;
                hex: string;
                reqSigs: number;
                addresses: string[];
            }>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
    error: z.ZodNullable<z.ZodAny>;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
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
}, {
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
