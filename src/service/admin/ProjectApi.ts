import axios from "axios";
import { serverConfig } from "../../config";
import Project from "../../model/visitor/Project";
import {Response} from "../../model/Response";

class ProjectApi{
    static async saveProject(project : Project) : Promise<Response<Project> | null> {
        var token = localStorage.getItem('token') ||  '';
        const config = {
            method: 'post',
            url: `${serverConfig.baseURL}/admin/addProject`,
            headers: { 
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            },
            data : project
         };

        try {
            const axiosResponse = await axios(config);
            const response = axiosResponse.data;
            return response;
        } catch (error) {
            console.error(`Error saving project:`, error);
            return null;
        }
    } 

    static async deleteProject(id : string) : Promise<Response<null> | null> {
        var token = localStorage.getItem('token') ||  '';
        const config = {
            method: 'delete',
            url: `${serverConfig.baseURL}/admin/deleteProject?id=${id}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        try {
            const axiosResponse = await axios(config);
            const response = axiosResponse.data;
            return response;
        }
        catch (error) {
            console.error(`Error deleting project:`, error);
            return null;
        }
    }
}

export default ProjectApi;