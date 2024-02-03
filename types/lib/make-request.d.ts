import { ZodObject, ZodRawShape, z } from "zod";
type requiredKeys<T extends object> = {
    [k in keyof T]: undefined extends T[k] ? never : k;
}[keyof T];
type Result<T extends ZodRawShape> = {
    [k in keyof {
        [k in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<T>, requiredKeys<z.baseObjectOutputType<T>>>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<T>, requiredKeys<T>>[k];
    }]: {
        [k in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<T>, requiredKeys<z.baseObjectOutputType<T>>>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<T>, requiredKeys<T>>[k];
    }[k];
};
declare function makeRequest(payload: Record<string, any>): Promise<Record<string, unknown>>;
declare function makeRequest<T extends ZodRawShape>(payload: Record<string, any>, model?: ZodObject<T>): Promise<Result<T>>;
export { makeRequest };
