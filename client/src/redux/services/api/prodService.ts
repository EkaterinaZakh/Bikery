import type { AxiosInstance } from 'axios';
import apiAxiosInstance from './apiAxiosInstance';
import type { ProdType } from '../../../types/prod';

class ProdService {
  constructor(private client: AxiosInstance) {}

  async getAllProds(): Promise<ProdType[]> {
    const response = await this.client<ProdType[]>('/products');
    if (response.status !== 200)
      return Promise.reject(
        new Error(`Wrong status code (expected 200, received: ${response.status})`),
      );
    return response.data;
  }

  async createNewProd(formData: FormData): Promise<ProdType> {
    const res = await this.client.post<ProdType>('/products/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // header multipart formdata
      },
    });
    if (res.status !== 201)
      return Promise.reject(new Error(`Wrond status code (expected 201, received: ${res.status}`));
    return res.data;
  }

  async deleteProdById(id: ProdType['id']): Promise<void> {
    const res = await this.client.delete(`/products/${id}`);
    if (res.status !== 200) {
      return Promise.reject(new Error(`Wrond status code (expected 200, received: ${res.status}`));
    }
  }

  async editProd(editedProd: ProdType): Promise<ProdType> {
    
    const res = await this.client.put<ProdType>(`/products/${editedProd.id}`, editedProd, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (res.status === 200) return res.data;
    return Promise.reject(new Error('Failed editing product'));
  }
}

const prodService = new ProdService(apiAxiosInstance);

export default prodService;