import axios from "axios"
import { ZodObject, ZodRawShape, z } from "zod"
import { ClientError } from "../error.js"
import RpcConfig from "./rpc-config.js"

const rpcCfg: RpcConfig = RpcConfig.default()

const client = axios.create({
    method: "POST",
    baseURL: rpcCfg.intoURL(),
    auth: rpcCfg.intoAuthObject(),
})

type requiredKeys<T extends object> = {
    [k in keyof T]: undefined extends T[k] ? never : k
}[keyof T]

type Result<T extends ZodRawShape> = {
    [k in keyof {
        [k in keyof z.objectUtil.addQuestionMarks<
            z.baseObjectOutputType<T>,
            requiredKeys<z.baseObjectOutputType<T>>
        >]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<T>, requiredKeys<T>>[k]
    }]: {
        [k in keyof z.objectUtil.addQuestionMarks<
            z.baseObjectOutputType<T>,
            requiredKeys<z.baseObjectOutputType<T>>
        >]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<T>, requiredKeys<T>>[k]
    }[k]
}

// Function overload
function makeRequest(payload: Record<string, any>): Promise<Record<string, unknown>>
function makeRequest<T extends ZodRawShape>(
    payload: Record<string, any>,
    model?: ZodObject<T>
): Promise<Result<T>>

// Function overload target
async function makeRequest<T extends ZodRawShape>(
    payload: Record<string, any>,
    model?: ZodObject<T>
): Promise<Result<T> | Record<string, unknown>> {
    const res = await client({ data: payload, method: "POST" })
    if (!model) return res.data

    const json = await model.safeParseAsync(res.data)
    if (!json.success) {
        throw new ClientError(json.error)
    }

    return json.data
}

export { makeRequest }
