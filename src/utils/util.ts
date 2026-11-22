export const response = (code: number, status: string, message: string, data: any = null) => {
    return {
        code,
        status,
        message,
        data,
    };
}