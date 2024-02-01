import axios from "axios";

const BASE_URL = "https://coallab.onrender.com/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
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
  } catch (e: any) {
    throw e?.response?.data || { message: e.message };
  }
};

export const signup = async ({
  firstName,
  lastName,
  email,
  password,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await api.post("/register", {
      firstName,
      lastName,
      email,
      password,
    });

    return res.data;
  } catch (e: any) {
    throw e?.response?.data || { message: e.message };
  }
};

export const forgetPassword = async ({ email }: { email: string }) => {
  try {
    const res = await api.post("/reset-password", { email });
    console.log("Password reset email sent successfully");
    return res?.data;
  } catch (e: any) {
    console.error("Error sending password reset email:", e);
    throw e?.response?.data || { message: e.message };
  }
};

export const resetPassword = async ({
  UserId,
  password,
}: {
  UserId: string;
  password: string;
}) => {
  try {
    const response = await api.patch("/reset-password",{UserId,password});
    return response?.data;
  } catch (e: any) {
    throw e?.response?.data || { message: e.message };
  }
};
