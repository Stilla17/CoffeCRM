import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setToken = (token) => localStorage.setItem("authToken", token);

export const getToken = () => {
  return localStorage.getItem("access_token") || localStorage.getItem("token");
};

export const removeToken = () => localStorage.removeItem("authToken");

apiInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const api = {
  async login(email, password) {
    try {
      const response = await apiInstance.post("/login/", { email, password });

      const data = response.data;

      if (data.access_token || data.token) {
        setToken(data.access_token || data.token);
      }

      return data;
    } catch (error) {
      const msg =
        error.response?.data?.detail ||
        error.response?.data?.non_field_errors?.[0] ||
        error.message ||
        "Login failed";

      throw new Error(msg);
    }
  },

  async register(userData) {
    try {
      const response = await apiInstance.post("/register/", userData);

      const data = response.data;

      if (data.access_token || data.token) {
        setToken(data.access_token || data.token);
      }

      return data;
    } catch (error) {
      let msg = "Registration failed";

      if (error.response?.data) {
        const errData = error.response.data;

        if (errData.email) msg = errData.email[0];
        else if (errData.detail) msg = errData.detail;
        else if (typeof errData === "string") msg = errData;
        else msg = Object.values(errData)[0][0] || msg;
      }

      throw new Error(msg);
    }
  },
};
