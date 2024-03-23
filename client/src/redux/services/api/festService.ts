import type { AxiosInstance } from 'axios';
import type { AddFestForm, FestType } from '../../../types/fest';
import apiAxiosInstance from './apiAxiosInstance';

class FestService {
  constructor(private client: AxiosInstance) {}

  async getAllFests(): Promise<FestType[]> {
    const response = await this.client<FestType[]>('/fest');
    if (response.status !== 200)
      return Promise.reject(
        new Error(`Wrong status code (expected 200, received: ${response.status})`),
      );
    return response.data;
  }

  async createNewFest(formData: AddFestForm): Promise<FestType> {
    const res = await this.client.post<FestType>('/fest', formData);
    if (res.status !== 201)
      return Promise.reject(new Error(`Wrong status code (expected 201, received: ${res.status}`));
    return res.data;
  }

  async deleteFestById(id: FestType['id']): Promise<void> {
    const res = await this.client.delete(`fest/${id}`);
    if (res.status !== 200) {
      return Promise.reject(new Error(`Wrong status code (expected 200, received: ${res.status}`));
    }
  }

  async editFest(editedFest: FestType): Promise<FestType> {
    const res = await this.client.put<FestType>(`/fest/${editedFest.id}`, editedFest);
    if (res.status !== 200) return res.data
    return Promise.reject(new Error(`Wrong status code (expected 200, received: ${res.status}`))
  }
}

const festService = new FestService(apiAxiosInstance);

export default festService;
