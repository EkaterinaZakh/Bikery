import type { AxiosInstance } from "axios";
import type { FestType } from "../../../types/fest";
import apiAxiosInstance from "./apiAxiosInstance";

class FestService {
    constructor(private client: AxiosInstance) {}

    async getAllFests(): Promise<FestType[]> {
            const response = await this.client<FestType[]>('/characters');
            if (response.status !== 200)
                return Promise.reject(
                new Error(
                    `Wrong status code (expected 200, received: ${response.status})`,
                ),
                );
            return response.data;
    }
}

const festService = new FestService(apiAxiosInstance);

export default festService;