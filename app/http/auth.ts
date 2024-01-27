import axios from "axios";

const BASE_URL = "https://coallab.onrender.com/api/v1";

const api = axios.create({
  baseURL: BASE_URL
});

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const res = await api.post("/login", { email, password });

    return res.data;
  } catch (e:any) {
     throw e?.response?.data || { message: e.message };
  }
};

export const signup = () => {};
