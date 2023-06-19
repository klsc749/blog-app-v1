import {QueryPageUtil} from "../../model/QueryPageUtil";
import {serverConfig} from "../../config";
import axios, {AxiosResponse} from "axios";
import {Response} from "../../model/Response";
import {QueryPageResult} from "../../model/QueryPageResult";
import BlogCollection from "../../model/visitor/BlogCollection";

class VisitorBlogCategoryApi{
    static async getBlogCollectionsByPage({page, limit} : QueryPageUtil){
        var config = {
            method: 'get',
            url: `${serverConfig.baseURL}/visitor/getBlogCollectionByPage?page=${page}&limit=${limit}`,
        };

        try {
            const axiosResponse: AxiosResponse<Response<QueryPageResult<BlogCollection>>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        } catch (error) {
            console.error(`Error fetching blog items:`, error);
            return null;
        }
    }

    static async getBlogColletionNum(){
        var config = {
            method: 'get',
            url: `${serverConfig.baseURL}/visitor/getBlogCollectionNum`,
        };

        try {
            const axiosResponse: AxiosResponse<Response<number>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        } catch (error) {
            console.error(`Error fetching blog items:`, error);
            return null;
        }
    }
}

export default VisitorBlogCategoryApi;