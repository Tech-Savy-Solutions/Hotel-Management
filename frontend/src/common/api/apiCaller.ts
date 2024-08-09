import axios from 'axios'; // Assuming you're using axios for making API requests

interface ApiCallerProps<TResponse = any> {
    url: string;
    type: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: object; // Make data optional for GET requests
}

// Define the function with proper typing
const apiCaller = async <TResponse>({ url, type, data }: ApiCallerProps<TResponse>): Promise<TResponse> => {
    const endPoint = import.meta.env.VITE_API_BASE_URL + url;
    let response;

    // Select the method based on the `type` parameter
    switch (type) {
        case 'GET':
            response = await axios.get(endPoint, { params: data });
            break;
        case 'POST':
            response = await axios.post(endPoint, data);
            break;
        case 'PUT':
            response = await axios.put(endPoint, data);
            break;
        case 'DELETE':
            response = await axios.delete(endPoint, { data });
            break;
        default:
            throw new Error(`Unsupported request type: ${type}`);
    }

    return response.data as TResponse; // Return the response data
};

export default apiCaller;
