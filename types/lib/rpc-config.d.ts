export declare const rpcConfig: {
    host: string;
    port: number;
    username: string;
    password: string;
};
export type RpcConfigFields = typeof rpcConfig;
export declare class RpcConfig {
    private host;
    private port;
    private username;
    private password;
    constructor(host: string, port: number, username: string, password: string);
    getConfig(): {
        host: string;
        port: number;
        usernmae: string;
        password: string;
    };
    intoURL(): string;
    intoAuthObject(): {
        username: string;
        password: string;
    };
    static default(): RpcConfig;
    static extendDefault(config: Partial<RpcConfigFields>): RpcConfig;
}
