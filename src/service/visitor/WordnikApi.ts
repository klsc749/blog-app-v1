import {wordnikConfig} from "../../config";
import axios from "axios";

class WordnikApi{
    static async getWordOfTheDay(){
        const config = {
            method: 'get',
            url: `${wordnikConfig.baseURL}wordOfTheDay?api_key=${wordnikConfig.token}`,
        };

        try {
            const axiosResponse = await axios(config);
            return axiosResponse.data;
        } catch (error) {
            console.error(`Error fetching blog items:`, error);
            return null;
        }
    }
}

export default WordnikApi;