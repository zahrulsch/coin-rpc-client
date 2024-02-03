import { z } from "zod";
export const BlockCount = z.object({
    result: z.number(),
    error: z.any(),
    id: z.string(),
});
export const BlockHash = z.object({
    result: z.string(),
    error: z.any(),
    id: z.string(),
});
export const Block = z.object({
    result: z.object({
        hash: z.string(),
        confirmations: z.number(),
        size: z.number(),
        height: z.number(),
        version: z.number(),
        merkleroot: z.string(),
        tx: z.array(z.string()),
        time: z.number(),
        mediantime: z.number(),
        nonce: z.number(),
        bits: z.string(),
        difficulty: z.number(),
        chainwork: z.string(),
        previousblockhash: z.string().optional(),
        nextblockhash: z.string().optional(),
    }),
    error: z.any(),
    id: z.string(),
});
