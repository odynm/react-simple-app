import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/";
const axiosInstance = axios.create({ baseURL: API_URL });

const getCards = async () => {
  const result = await axiosInstance.get("posts");
  return result?.data?.slice(0, 10) || [];
};

export const cardService = { getCards };
