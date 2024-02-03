import axios from "axios";
import { ClientError } from "../error.js";
import RpcConfig from "./rpc-config.js";
const rpcCfg = RpcConfig.default();
const client = axios.create({
    method: "POST",
    baseURL: rpcCfg.intoURL(),
    auth: rpcCfg.intoAuthObject(),
});
// Function overload target
async function makeRequest(payload, model) {
    const res = await client({ data: payload, method: "POST" });
    if (!model)
        return res.data;
    const json = await model.safeParseAsync(res.data);
    if (!json.success) {
        throw new ClientError(json.error);
    }
    return json.data;
}
export { makeRequest };
