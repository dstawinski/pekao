import axios from "axios";

export const postFormData = (data: any) => axios.post("http://139.162.188.10/api/", data);
