import axios from "axios";
import { baseUrl } from "./constant";
baseUrl
 const instance = axios.create({
  baseURL: baseUrl
});
export default instance;