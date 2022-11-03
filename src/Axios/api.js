import axios from "axios";

const URL = "http://localhost:5000/api";

export const addUser = async (data) => {
  try {
    await axios.post(URL + "/add-user", data);
  } catch (error) {
    console.log(error.message);
  }
};
