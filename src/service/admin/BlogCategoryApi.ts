import BlogCollection from "../../model/visitor/BlogCollection";
import {serverConfig} from "../../config";
import axios, {AxiosResponse} from "axios";
import {Response} from "../../model/Response";
import {QueryPageResult} from "../../model/QueryPageResult";
import BlogItem from "../../model/admin/BlogItem";

class BlogCategoryApi{
    static async updateCategory(blogCollection : BlogCollection){
        const token = localStorage.getItem("token") || "";
        var config = {
            method: 'post',
            url: `${serverConfig.baseURL}/admin/updateBlogCollection`,
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            data : blogCollection
        };

        try{
            const axiosResponse: AxiosResponse<Response<BlogCollection>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        }catch(error){
            console.error(`Error updating blog category:`, error);
            return Promise.reject(error);
        }

    }

    static async deleteCategory(id : string){
        const token = localStorage.getItem("token") || "";

        var config = {
            method: 'delete',
            url: `${serverConfig.baseURL}/admin/deleteBlogCollection/${id}`,
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        };
        try {
            const axiosResponse: AxiosResponse<Response<string>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        } catch (error) {
            console.error(`Error deleting blog category:`, error);
            return Promise.reject(error);
        }
    }
}
export default BlogCategoryApi;