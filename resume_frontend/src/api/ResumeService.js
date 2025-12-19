import axios from "axios";

export const baseURLL = "http://localhost:8080";

export const axiosInstance = axios.create({
  baseURL: baseURLL,
});

// ==========================
//   Resume AI Generator
// ==========================
export const generateResume = async (description) => {
  const response = await axiosInstance.post("/api/v1/resume/generate", {
    userDescription: description,
  });

  return response.data;
};

// ==========================
//          SIGN UP
// ==========================
export const registerUser = async (userData) => {
  const response = await axiosInstance.post("/user/register", userData);
  return response.data;
};

// ==========================
//          LOGIN
// ==========================
export const loginUser = async (email, password) => {
  const response = await axiosInstance.post("/user/login", {
    email,
    password,
  });

  return response.data;
};
