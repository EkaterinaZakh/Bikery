import type { AxiosInstance } from 'axios';
import apiAxiosInstance from './apiAxiosInstance';
import type { AddRaceFormType, RaceType } from '../../../types/race';
import type { SetRating } from '../../../types/rating';

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

  async addNewRace(formData: AddRaceFormType): Promise<RaceType> {
    const res = await this.client.post<RaceType>('/races', formData);
    if (res.status !== 201)
      return Promise.reject(new Error(`Wrong status code (expected 201, received: ${res.status}`));
    return res.data;
  }

  async deleteRaceById(id: RaceType['id']): Promise<void> {
    const res = await this.client.delete(`/races/${id}`);
    if (res.status !== 200) {
      return Promise.reject(new Error(`Wrong status code (expected 200, received: ${res.status}`));
    }
  }

  async setRaceRating(formData: SetRating): Promise<SetRating> {
    const res = await this.client.post<SetRating>(`/races/${formData.raceId}/rating`, formData);
    if (res.status !== 201) {
      return Promise.reject(new Error(`Wrong status code (expected 201, received: ${res.status}`));
    }
    return res.data;
  }
}

const raceService = new RaceService(apiAxiosInstance);

export default raceService;
