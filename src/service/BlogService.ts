import {serverConfig} from "../config";
import {Blog} from "../model/Blog";
import axios, { AxiosResponse } from 'axios';

export async function getBlogById(id: string): Promise<Blog | null> {
    try {
        const response: AxiosResponse<Blog> = await axios.get(
            `${serverConfig.baseURL}/blog/${id}`
        );
        return response.data;
    } catch (error) {
        console.error(`Error fetching blog with id ${id}:`, error);
        return null;
    }
}






