export const sendApiSuccess = (data: any, message: string = 'Processed succesfully') => {

    return {
        success: true,
        data,
        message
    }
}

export const sendApiFailure = (data: any, message: string = 'Processing failed') => {
    return {
        success: false,
        data,
        message
    }
}

export interface ApiResponse<T> {
    success: boolean,
    data: T,
    message: string
}