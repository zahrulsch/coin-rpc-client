import { nanoid } from "nanoid"
import { makeRequest } from "../make-request.js"
import { DecodedTransaction, RawTransaction } from "../../model/rpc-response/transation.js"

class Transaction {
    static async getRawTransaction(txid: string) {
        const payload = { method: "getrawtransaction", id: nanoid(15), params: [txid] }
        return await makeRequest(payload, RawTransaction)
    }

    static async getTransaction(txid: string) {
        const payload = { method: "getrawtransaction", id: nanoid(15), params: [txid, 1] }
        return await makeRequest(payload, DecodedTransaction)
    }

    static async decodeRawTransaction(hex: string) {
        const payload = { method: "decoderawtransaction", id: nanoid(15), params: [hex] }
        return await makeRequest(payload, DecodedTransaction)
    }
}

export default Transaction
