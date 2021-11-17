import http from "./http"
import {AxiosResponse} from "axios";

export const Login = (param:LoginParam):Promise<AxiosResponse<Result>> =>{
    return http.post("/user/login",param)
}

