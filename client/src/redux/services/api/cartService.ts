import type { AxiosInstance } from 'axios';
import apiAxiosInstance from './apiAxiosInstance';
import type { CartType } from '../../../types/cart';

class CartService {
  constructor(private client: AxiosInstance) {}

  async getAllCartItem(): Promise<CartType[]> {
    const response = await this.client<CartType[]>('/cart');
    if (response.status !== 200)
      return Promise.reject(
        new Error(`Wrong status code (expected 200, received: ${response.status})`),
      );
    return response.data;
  }
}

const cartService = new CartService(apiAxiosInstance);

export default cartService;

