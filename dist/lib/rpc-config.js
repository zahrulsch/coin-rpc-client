export const rpcConfig = {
    host: "localhost",
    port: 8082,
    username: "root",
    password: "dLvbVodQ4YARaOeaB0kn4sriMXS4c1fEGgpX",
};
export default class RpcConfig {
    host;
    port;
    username;
    password;
    constructor(host, port, username, password) {
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
    }
    getConfig() {
        return {
            host: this.host,
            port: this.port,
            usernmae: this.username,
            password: this.password,
        };
    }
    intoURL() {
        return `http://${this.host}:${this.port}/`;
    }
    intoAuthObject() {
        return {
            username: this.username,
            password: this.password,
        };
    }
    static default() {
        return new RpcConfig(rpcConfig.host, rpcConfig.port, rpcConfig.username, rpcConfig.password);
    }
    static extendDefault(config) {
        const conf = {
            ...rpcConfig,
            ...config,
        };
        return new RpcConfig(conf.host, conf.port, conf.username, conf.password);
    }
}
