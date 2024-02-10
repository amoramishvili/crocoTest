import type { AxiosInstance } from 'axios';
import axios from 'axios';

interface HttpOpts {
  baseApiUrl: string;
}

interface Http {
  request: AxiosInstance | null;
  init: (opts: HttpOpts) => void;
}

function createHttpClient({ baseApiUrl }): AxiosInstance {
  return axios.create({
    withCredentials: true,
    baseURL: baseApiUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Content-Type': 'multipart/form-data',
    },
  });
}

const http: Http = {
  request: null,
  init(opts: HttpOpts): void {
    this.request = createHttpClient(opts);
  },
};
export default http;
