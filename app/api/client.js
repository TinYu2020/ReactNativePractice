import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.40.206:9000/api",
});

export default apiClient;
