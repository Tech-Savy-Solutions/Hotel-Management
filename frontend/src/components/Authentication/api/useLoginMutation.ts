import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { API_TYPE, LOGIN, USER } from 'src/common';
import apiCaller from 'src/common/api/apiCaller';
import { showAlert } from 'src/common/components/ShowAlert';
import { LoginRequest, UserResponse } from '../types/auth';
import { LoginSchema } from 'src/common/api/zodSchema';


// Define the hook with explicit return type
const useLoginMutation = (): UseMutationResult<UserResponse, Error, LoginRequest> => {
    // Define the mutation function
    const login = async (credentials: LoginRequest): Promise<UserResponse> => {
        const response = await apiCaller<UserResponse>({
            url: USER + LOGIN,
            type: API_TYPE.POST,
            data: credentials,
        });
        const result = LoginSchema.safeParse(response)
        if (result.success) {
            return result.data;
        } else {
            throw new Error('Invalid Response');
        }

    };

    // Use the mutation hook
    return useMutation<UserResponse, Error, LoginRequest>({
        mutationFn: login,
        onSuccess: (data) => {
            console.log("data", data)
            showAlert({
                title: 'Success',
                message: `Welcome back, ${data.username}!`,
                color: 'green',
            });
            localStorage.setItem('user', data.id);
        },
        onError: (error: Error) => {
            showAlert({
                title: 'Error',
                message: error.message || 'Login failed.',
                color: 'red',
            });
        },
    });
};

export default useLoginMutation;
