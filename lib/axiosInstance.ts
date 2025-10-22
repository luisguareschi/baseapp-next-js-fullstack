import baseAxios from "axios";

const createAxiosInstance = () => {
  const instance = baseAxios.create();

  // set the content type to json
  instance.defaults.headers.post["Content-Type"] = "application/json";
  instance.defaults.headers.patch["Content-Type"] = "application/json";
  instance.defaults.headers.get["Content-Type"] = "application/json";

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error?.response?.status === 401) {
        window.location.href = "/login";
        return;
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

const axios = createAxiosInstance();

export const customAxios = async <T>(
  ...args: Parameters<typeof axios>
): Promise<T> => {
  const response = await axios(...args);
  return response.data;
};

export default axios;
