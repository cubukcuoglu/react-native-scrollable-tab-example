import { AxiosError } from "axios";

const handleError = (error: AxiosError): { error: AxiosError } => {
    const status = error?.response?.status;
    const data = error?.response?.data;

    if (!status) return { error: { ...error, message: "Network Error" } };

    const message = (data?.message || error?.message) ?? "Technical Error";

    if (message) return { error: { ...error, message } };

    return { error: {  ...error, message: "Server Error" } };
};

export { handleError }