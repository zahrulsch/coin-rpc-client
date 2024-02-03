import { z } from "zod";
export const RawTransaction = z.object({
    result: z.string(),
    error: z.any(),
    id: z.string(),
});
export const DecodedTransaction = z.object({
    result: z.object({
        txid: z.string(),
        size: z.number(),
        version: z.number(),
        locktime: z.number(),
        vin: z.array(z.union([
            z.object({
                txid: z.string(),
                vout: z.number(),
                scriptSig: z.object({
                    asm: z.string(),
                    hex: z.string(),
                }),
                sequence: z.number(),
            }),
            z.object({
                coinbase: z.string(),
                sequence: z.number(),
            }),
        ])),
        vout: z.array(z.object({
            value: z.number(),
            valueSat: z.number(),
            n: z.number(),
            scriptPubKey: z.object({
                asm: z.string(),
                hex: z.string(),
                reqSigs: z.number(),
                type: z.string(),
                addresses: z.array(z.string()),
            }),
        })),
    }),
    error: z.any().nullable(),
    id: z.string(),
});
