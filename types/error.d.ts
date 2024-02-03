export declare class ClientError extends Error {
    name: string;
    message: string;
    cause?: any;
    constructor(err: any);
    toString(): string;
}
