import axios from 'axios';
import { USER_TOKEN_KEY, getStorageItem } from '..';

interface ApiCallerProps<TResponse = any> {
    url: string;
    type: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: object;
    params?: object; // Add optional params for GET requests
}

const apiCaller = async <TResponse>({
    url,
    type,
    data,
    params,
}: ApiCallerProps<TResponse>): Promise<TResponse> => {
    const endPoint = import.meta.env.VITE_API_BASE_URL + url;
    const token = getStorageItem(USER_TOKEN_KEY);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: params, // Add params to the config object
    };

    let response;

    switch (type) {
        case 'GET':
            response = await axios.get(endPoint, config);
            break;
        case 'POST':
            response = await axios.post(endPoint, data, config);
            break;
        case 'PUT':
            response = await axios.put(endPoint, data, config);
            break;
        case 'DELETE':
            response = await axios.delete(endPoint, { ...config, data });
            break;
        default:
            throw new Error(`Unsupported request type: ${type}`);
    }

    return response.data as TResponse;
};

export default apiCaller;