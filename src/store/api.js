const API_BASE_URL = "http://142.93.183.201:8001/api/v1"
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const setToken = (token) => localStorage.setItem("authToken", token);
export const getToken = () => {
  return localStorage.getItem("access_token") || localStorage.getItem("token");
};
export const removeToken = () => localStorage.removeItem("authToken");

export const api = {
  async login(email, password) {
    const response = await fetch(`${API_BASE_URL}/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.detail || "Login failed");
    }

    const data = await response.json();
    if (data.access_token || data.token) {
      setToken(data.access_token || data.token);
    }
    return data;
  },

  async register(userData) {
    const response = await fetch(`${API_BASE_URL}/register/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      let msg = "Registration failed";
      if (error.email) msg = error.email[0];
      if (error.detail) msg = error.detail;
      throw new Error(msg);
    }

    const data = await response.json();
    if (data.access_token || data.token) {
      setToken(data.access_token || data.token);
    }
    return data;
  },
};
