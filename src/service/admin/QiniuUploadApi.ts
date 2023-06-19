import {qiniuConfig, serverConfig} from "../../config";
import axios, {AxiosResponse} from "axios";
import {Response} from "../../model/Response";
import * as qiniu from 'qiniu-js'
import {nanoid} from "nanoid";

interface uploadProps {
    file : File,
    path : string,
    setProgress? : (progress : number) => void
    handleComplete? : (url:string) => void
}

class QiniuUploadApi{
    static async uploadFile({file, path, setProgress, handleComplete} : uploadProps){
        try {
            const response = await QiniuUploadApi.getUploadToken();
            const key = path + "/" + nanoid();
            if (response.code === 200) {
                const observable = qiniu.upload(file, key, response.data, {}, {})

                return new Promise((resolve, reject) => {
                    observable.subscribe(
                        {
                            next: (res) => {
                                if(setProgress){
                                    setProgress(res.total.percent);
                                }
                            },
                            error: (err) => {
                                console.error('Error uploading file:', err);
                            },
                            complete: (res) => {
                                if(handleComplete){
                                    handleComplete(`${qiniuConfig.imageBaseURL}${key}`)
                                }
                            }
                        }
                    );
                });
            } else {
                console.error('Error fetching upload token:', response.message);
                return Promise.reject(new Error(response.message));
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            return Promise.reject(error);
        }
    }

    private static async getUploadToken(){
        const token = localStorage.getItem('token') ||  '';
        var config = {
            method: 'get',
            url: `${serverConfig.baseURL}/admin/uploadToken`,
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        };

        try {
            const axiosResponse: AxiosResponse<Response<string>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        } catch (error) {
            console.error(`Error fetching upload token:`, error);
            return Promise.reject(error);
        }
    }
}

export default QiniuUploadApi;