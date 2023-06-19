import axios, { AxiosResponse } from "axios";
import {BlogItem} from "../../model/visitor/BlogItem";
import {serverConfig} from "../../config";
import {Response} from "../../model/Response";
import {QueryPageUtil} from "../../model/QueryPageUtil";
import {QueryPageResult} from "../../model/QueryPageResult";
import {Blog} from "../../model/visitor/Blog";

class BlogServiceApi{
    static async getBlogItemsByPage(queryPageUtil : QueryPageUtil): Promise<Response<QueryPageResult<BlogItem>> | null> {
        const config = {
            method: "get",
            url: `${serverConfig.baseURL}/visitor/getBlogItemsByPage?page=${queryPageUtil.page}&limit=${queryPageUtil.limit}`,
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const axiosResponse: AxiosResponse<Response<QueryPageResult<BlogItem>>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        } catch (error) {
            console.error(`Error fetching blog items:`, error);
            return null;
        }
    }

    static async getBlogItemsByPageAndCategory(queryPageUtil : QueryPageUtil, category: string) {
        var config = {
            method: 'get',
            url: `${serverConfig.baseURL}/visitor/getBlogItemsByCategory?category=${category}&page=${queryPageUtil.page}&limit=${queryPageUtil.limit}`,
        };
        try {
            const axiosResponse: AxiosResponse<Response<QueryPageResult<BlogItem>>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        }catch (error) {
            console.error(`Error fetching blog items:`, error);
            return null;
        }
    }

    static async getBlogById(id: string): Promise<Response<Blog> | null> {
        const config = {
            method: "get",
            url: `${serverConfig.baseURL}/visitor/getBlog/` + id,
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const axiosResponse: AxiosResponse<Response<Blog>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        } catch (error) {
            console.error(`Error fetching blog item:`, error);
            return null;
        }
    }

    static async getBlogNum(): Promise<Response<number> | null> {
        const config = {
            method: "get",
            url: `${serverConfig.baseURL}/visitor/getVisibleBlogNum`,
        };

        try {
            const axiosResponse: AxiosResponse<Response<number>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        } catch (error) {
            console.error(`Error fetching blog item:`, error);
            return null;
        }
    }

    static async getTagNum(): Promise<Response<number> | null> {
        const config = {
            method: "get",
            url: `${serverConfig.baseURL}/visitor/getTagNum`,
        };

        try {
            const axiosResponse: AxiosResponse<Response<number>> = await axios(config);
            const response = axiosResponse.data;
            return response;
        } catch (error) {
            console.error(`Error fetching blog item:`, error);
            return null;
        }
    }
}

export default BlogServiceApi;
