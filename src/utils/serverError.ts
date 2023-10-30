import axios from 'axios';

interface ServerError {
  success: boolean;
  response: unknown;
  error: string;
}

// eslint-disable-next-line import/prefer-default-export
export const getErrorMsg = (serverError: unknown) => {
  if (axios.isAxiosError<ServerError>(serverError)) {
    return serverError.response?.data.error;
  }
  return null;
};
