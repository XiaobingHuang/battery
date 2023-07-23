import _ from "lodash";
import axios, { AxiosRequestConfig } from "axios";
import { apiBasePath } from "@/app/configs";

let mockAdapter = null;
// axios
const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: apiBasePath,
});

// mock axios
const mockApi = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: apiBasePath,
});

if (process.env.REQUEST_MOCk) {
  mockAdapter = require("./mock").default(mockApi);
}

const responseInterceptor = (response) => {
  const { data: responseData, status } = response;

  // const {errors, warnings, data} = responseData;

  // if (responseData?.errors?.length > 0) {
  //   console.log(responseData?.errors);
  //   return Promise.reject(responseData?.errors);
  // }

  // const isResponseType = typeof response.data === 'object' && 'data' in response.data && 'errors' in response.data && 'warnings' in response.data;
  // if (isResponseType) {
  //   response.data = response.data.data;
  // }

  if (mockAdapter) {
    return new Promise((resolve) => setTimeout(() => resolve(response), 200));
  }

  return response;
};

const responseErrorInterceptor = (error) => {
  if (error) {
    if (error.response) {
      const { status, statusText } = error.response;
      console.error(`${status} ${statusText}`);
    } else {
      console.error(error.message);
    }

    return Promise.reject(error);
  }
};

api.interceptors.response.use(responseInterceptor, responseErrorInterceptor);
mockApi.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor
);
api.interceptors.request.use((config) => {
  if (config.method === "get") {
    config.data = { unused: 0 };
  }
  return config;
});

type CallbackResponseSpecFunc = (
  config: AxiosRequestConfig
) => any[] | Promise<any[]>;

type MockObject<T> = {
  type:
    | "reply"
    | "timeout"
    | "timeoutOnce"
    | "networkError"
    | "networkErrorOnce";
  handle?: number | [number, T] | CallbackResponseSpecFunc;
};

interface Service<T = any> extends AxiosRequestConfig {
  mock?: MockObject<T> | number | [number, T];
  mockType?: "Realtime" | "Mock";
  mockSuffix?: string;
  skipErrorHandler?: boolean;
}

// service
export default function <T>({
  mock,
  skipErrorHandler = false,
  ...args
}: Service<T>) {
  const { method, url, mockType = "Mock", mockSuffix = "json" } = args;
  const mockMethod = _.camelCase(`on ${method}`);
  // Mock: Forcibly enable virtual data globally Adaptive: Defined by the respective request
  if (mockAdapter && mockType !== "Realtime" && typeof mock !== "undefined") {
    if (!Array.isArray(mock) && mock instanceof Object) {
      const { type, handle } = mock;
      mockAdapter[mockMethod](url)[type](handle);
    } else if (Array.isArray(mock)) {
      mockAdapter[mockMethod](url).reply(...mock);
    } else {
      mockAdapter[mockMethod](url).reply(mock);
    }

    // @ts-ignore
    return mockApi.request<T>({ ...args, skipErrorHandler });
  }
  if (mockAdapter) {
    args.method = "GET";
    if (args.data) args.params = args.data;
    args.url += "." + mockSuffix;
  }
  // @ts-ignore
  return api.request<T>({ ...args, skipErrorHandler });
}
