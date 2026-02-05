export interface ApiReposponse<T> {
    status: string;
    data?: T;
    message?: string;
    error?: string;
    code?: string;
};

export function successResponse<T>(data?: T, message?: string): ApiReposponse<T> {
    return {
        status: "success",
        data,
        message
    };
};