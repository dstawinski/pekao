import axios from "axios";

export const getFormInputs = async () => {
  const response = await axios.get("http://localhost:8000/api/");
  return response.data;
};
