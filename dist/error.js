import { ZodError } from "zod";
export class ClientError extends Error {
    name;
    message;
    cause;
    constructor(err) {
        super();
        if (err instanceof ZodError) {
            const { name, message, cause } = err;
            this.name = name;
            this.message = message;
            this.cause = cause;
            return;
        }
        if (err instanceof Error) {
            const { message, name, cause } = err;
            this.name = name;
            this.message = message;
            this.cause = cause;
            return;
        }
        this.name = "Client Error";
        this.message = "unpredictable error occurred";
        this.cause = null;
    }
    toString() {
        return JSON.stringify({
            name: this.name,
            message: this.message,
            cause: this.cause,
        });
    }
}
