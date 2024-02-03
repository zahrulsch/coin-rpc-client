import { z } from "zod";
export declare const BlockCount: z.ZodObject<{
    result: z.ZodNumber;
    error: z.ZodAny;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    result: number;
    id: string;
    error?: any;
}, {
    result: number;
    id: string;
    error?: any;
}>;
export declare const BlockHash: z.ZodObject<{
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
export declare const Block: z.ZodObject<{
    result: z.ZodObject<{
        hash: z.ZodString;
        confirmations: z.ZodNumber;
        size: z.ZodNumber;
        height: z.ZodNumber;
        version: z.ZodNumber;
        merkleroot: z.ZodString;
        tx: z.ZodArray<z.ZodString, "many">;
        time: z.ZodNumber;
        mediantime: z.ZodNumber;
        nonce: z.ZodNumber;
        bits: z.ZodString;
        difficulty: z.ZodNumber;
        chainwork: z.ZodString;
        previousblockhash: z.ZodOptional<z.ZodString>;
        nextblockhash: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
    error: z.ZodAny;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
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
}, {
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
