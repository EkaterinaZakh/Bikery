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
}

const prodService = new ProdService(apiAxiosInstance);

export default prodService;

//   async getAllChars(): Promise<CharacterType[]> {
//     const response = await this.client<CharacterType[]>('/characters');
//     if (response.status !== 200)
//       return Promise.reject(
//         new Error(
//           `Wrong status code (expected 200, received: ${response.status})`,
//         ),
//       );
//     return response.data;
//   }

//   async createNewChar(formData: AddCharacterForm): Promise<CharacterType> {
//     const res = await this.client.post<CharacterType>('/characters', formData);
//     if (res.status !== 201)
//       return Promise.reject(
//         new Error(`Wrong status code (expected 201, received: ${res.status}`),
//       );
//     return res.data;
//   }

//   async getCharById(id: CharacterType['id']): Promise<CharacterType> {
//     const res = await this.client<CharacterType>(`/characters/${id}`);
//     if (res.status !== 200)
//       return Promise.reject(
//         new Error(`Wrong status code (expected 200, received: ${res.status}`),
//       );
//     return res.data;
//   }

//   async deleteCharById(id: CharacterType['id']): Promise<void> {
//     const res = await this.client.delete(`/characters/${id}`);
//     if (res.status !== 200)
//       return Promise.reject(
//         new Error(`Wrong status code (expected 200, received: ${res.status}`),
//       );
//   }

//   async editChar(editedChar: CharacterType): Promise<CharacterType> {
//     const res = await this.client.put<CharacterType>(
//       `/characters/${editedChar.id}`,
//       editedChar,
//     );
//     if (res.status === 200) return res.data;
//     return Promise.reject(new Error('Falied editing char'));
//   }
// }
