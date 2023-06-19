import BlogItem from "../../model/admin/BlogItem";
import {serverConfig} from "../../config";
import {QueryPageUtil} from "../../model/QueryPageUtil";
import {QueryPageResult} from "../../model/QueryPageResult";
import axios, {AxiosResponse} from "axios";
import {Response} from "../../model/Response";
import Blog from "../../model/admin/Blog";

class BlogApi{
    static async getAdminBlogItems(pageQueryUtil : QueryPageUtil) : Promise<Response<QueryPageResult<BlogItem>>>{
        const token = localStorage.getItem('token') ||  '';
        var config = {
            method: 'get',
            url:`${serverConfig.baseURL}/admin/getBlogItemDTOByPage?page=${pageQueryUtil.page}&limit=${pageQueryUtil.limit}`,
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        };

        try {
            const axiosResponse: AxiosResponse<Response<QueryPageResult<BlogItem>>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        }
        catch (error) {
            console.error(`Error fetching blog items:`, error);
            return Promise.reject(error);
        }
    }

    static async getBlogItemByPageAndStatus(pageQueryUtil : QueryPageUtil, status : string) : Promise<Response<QueryPageResult<BlogItem>>>{
        const token = localStorage.getItem('token') ||  '';
        var config = {
            method: 'get',
            url: `${serverConfig.baseURL}/admin/getBlogItemDTOByPageAndStatus?page=${pageQueryUtil.page}&limit=${pageQueryUtil.limit}&status=${status}`,
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        };

        try {
            const axiosResponse: AxiosResponse<Response<QueryPageResult<BlogItem>>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        }catch (error) {
            console.error(`Error fetching blog items:`, error);
            return Promise.reject(error);
        }
    }

    static async getBlogById(id : string) : Promise<Response<Blog>>{
        const token = localStorage.getItem('token') ||  '';
        var config = {
            method: 'get',
            url: `${serverConfig.baseURL}/admin/getBlogDTOById/${id}`,
            headers: {
                'Authorization': `Bearer ${token}`,
                'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)'
            }
        }

        try {
            const axiosResponse: AxiosResponse<Response<Blog>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        }
        catch (error) {
            console.error(`Error fetching blog items:`, error);
            return Promise.reject(error);
        }
    }

    static async softDeleteBlogByid(id : string){
        const token = localStorage.getItem('token') ||  '';
        var config = {
            method: 'delete',
            url: `${serverConfig.baseURL}/admin/softDeleteBlog/${id}`,
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        };

        try {
            const axiosResponse: AxiosResponse<Response<null>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        }catch (error) {
            console.error(`Error fetching blog items:`, error);
            return Promise.reject(error);
        }
    }

    static async hardDeleteBlogByid(id : string){
        const token = localStorage.getItem('token') ||  '';
        var config = {
            method: 'delete',
            url: `${serverConfig.baseURL}/admin/hardDeleteBlog/${id}`,
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }

        try {
            const axiosResponse: AxiosResponse<Response<null>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        } catch (error) {
            console.error(`Error fetching blog items:`, error);
            return Promise.reject(error);
        }
    }

    static async restoreBlogByid(id : string){
        const token = localStorage.getItem('token') ||  '';
        var config = {
            method: 'post',
            url: `${serverConfig.baseURL}/admin/restoreBlog/${id}`,
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }

        try {
            const axiosResponse: AxiosResponse<Response<null>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        }catch (error) {
            console.error(`Error fetching blog items:`, error);
            return Promise.reject(error);
        }
    }
}

export default BlogApi;
