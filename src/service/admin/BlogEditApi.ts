import {Response} from "../../model/Response";
import {serverConfig} from "../../config";
import axios, {AxiosResponse} from "axios";

interface BlogEditProps {
    id?: string;
    title?: string;
    content?: string;
    category?: string;
    tags?: string[];
    status?: string;
    visibility?: string;
    date?: string;
    lastModifiedTime?: string;
}

export class BlogEditApi{
    static async saveBlogContent(blogEditProps : BlogEditProps){
        const token = localStorage.getItem('token') ||  '';
        var config = {
            method: 'post',
            url: `${serverConfig.baseURL}/admin/updateBlogContent`,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data : blogEditProps
        };

        try {
            const axiosResponse: AxiosResponse<Response<BlogEditProps>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        }catch (error) {
            console.error(`Error fetching blog items:`, error);
            return Promise.reject(error);
        }
    }

    static async saveBlog(blogEditProps : BlogEditProps){

        const token = localStorage.getItem('token') ||  '';

        var config = {
            method: 'post',
            url: `${serverConfig.baseURL}/admin/saveBlog`,
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data : blogEditProps
        };

        try {
            const axiosResponse: AxiosResponse<Response<BlogEditProps>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        }
        catch (error) {
            console.error(`Error save blog to draft:`, error);
            return Promise.reject(error);
        }
    }

    static async publishBlog(blogEditProps : BlogEditProps){
        const token = localStorage.getItem('token') ||  '';

        var config = {
            method: 'post',
            url: `${serverConfig.baseURL}/admin/publishBlog`,
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data : blogEditProps
        };

        try {
            const axiosResponse: AxiosResponse<Response<BlogEditProps>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        }
        catch (error) {
            console.error(`Error publish blog`, error);
            return Promise.reject(error);
        }
    }
}