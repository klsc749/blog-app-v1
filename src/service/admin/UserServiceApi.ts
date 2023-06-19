import {serverConfig} from "../../config";
import axios, {AxiosResponse} from "axios";
import {Response} from "../../model/Response";
import {QueryPageResult} from "../../model/QueryPageResult";
import {BlogItem} from "../../model/visitor/BlogItem";

interface LoginResponse {
    token: string;
}

export class UserServiceApi{
    static async login(username: string, password: string): Promise<Response<LoginResponse>> {
        var data = new FormData();
        data.append("username", username);
        data.append("password", password);
        const config = {
            method: "post",
            url: `${serverConfig.baseURL}/visitor/login`,
            headers: {
                "Content-Type": "multipart/form-data",
            },
            data:data
        };

        try {
            const axiosResponse: AxiosResponse<Response<LoginResponse>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        } catch (error) {
            console.error(`Error fetching blog items:`, error);
            return Promise.reject(error);
        }
    }

    static async checkToken(username : string, token : string) : Promise<Response<boolean>>{
        const config = {
            method: 'get',
            url: `${serverConfig.baseURL}/visitor/checkToken?username=${username}&token=${token}`,
        };

        try {
            const axiosResponse: AxiosResponse<Response<boolean>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        }catch (error) {
            console.error(`Error fetching blog items:`, error);
            return Promise.reject(error);
        }
    }
}