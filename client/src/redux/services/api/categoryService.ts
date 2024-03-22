import type { AxiosInstance } from 'axios';
import type { CategoryType } from '../../../types/cats';
import apiAxiosInstance from './apiAxiosInstance';

class CategoryService {
  constructor(private client: AxiosInstance) {}

  async getAllCategories(): Promise<CategoryType[]> {
    const response = await this.client<CategoryType[]>('/categories');
    if (response.status !== 200)
      return Promise.reject(
        new Error(`Wrong status code (expected 200, received: ${response.status})`),
      );
    return response.data;
  }
}

const categoryService = new CategoryService(apiAxiosInstance);

export default categoryService;