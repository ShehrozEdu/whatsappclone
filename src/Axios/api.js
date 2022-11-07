import axios from "axios";

const URL = "http://localhost:4000/api";

export const addUser = async (data) => {
  try {
    await axios.post(`${URL}/add-user`, data);
  } catch (error) {
    console.log(error.message);
  }
};
export const getUser = async () => {
  try {
    let response = await axios.get(`${URL}/get-user`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${URL}/conversation/add`, data);
  } catch (error) {
    console.log(error);
  }
};
export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${URL}/conversation/get`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
