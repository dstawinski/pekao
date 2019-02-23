import axios from "axios";

export const getFormInputs = async () => {
  const response = await axios.get("http://139.162.188.10/api/");
  return response.data;
};
