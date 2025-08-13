import axios from "axios";

const API_URL = "https://rapidquest-backend-0rhj.onrender.com/api/messages";

export const getConversations = () => axios.get(`${API_URL}/conversations`);
export const getMessages = (id) => axios.get(`${API_URL}/${id}`);
export const sendMessage = (msg) => axios.post(API_URL, msg);
