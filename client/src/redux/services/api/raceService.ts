import type { AxiosInstance } from 'axios';
import apiAxiosInstance from './apiAxiosInstance';
import type { RaceType } from '../../../types/race';

class RaceService {
  constructor(private client: AxiosInstance) {}

  async getAllRace(): Promise<RaceType[]> {
    const response = await this.client<RaceType[]>('/races');
    if (response.status !== 200)
      return Promise.reject(
        new Error(`Wrong status code (expected 200, received: ${response.status})`),
      );
    return response.data;
  }
}

const raceService = new RaceService(apiAxiosInstance);

export default raceService;
