import axios from "axios";
import { serverConfig } from "../../config";
import { QueryPageResult } from "../../model/QueryPageResult";
import { QueryPageUtil } from "../../model/QueryPageUtil";
import {Response} from "../../model/Response";
import Project from "../../model/visitor/Project";

class ProjectApi{
    static async getProjectByPage(queryPageUtil : QueryPageUtil) : Promise<Response<QueryPageResult<Project>> | null> {
        const config = {
            method: 'get',
            url: `${serverConfig.baseURL}/visitor/getProjectByPage?page=${queryPageUtil.page}&limit=${queryPageUtil.limit}`,
         };

        try {
            const axiosResponse = await axios(config);
            const response = axiosResponse.data;
            return response;
        } catch (error) {
            console.error(`Error fetching projects:`, error);
            return null;
        }
    }
}

export default ProjectApi;