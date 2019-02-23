import axios from "axios";

export const getFormInputs = async () => {
  const response = await axios.get("http://localhost:8000/api/");
  console.log(response);
  return response;
};
