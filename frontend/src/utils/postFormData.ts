import axios from "axios";

export const postFormData = (data: any) => axios.post("http://localhost:8000/api/", data);
