import type { AxiosInstance } from 'axios';
import apiAxiosInstance from './apiAxiosInstance';
import type { AddCommitForm, CommitType } from '../../../types/commit';

class CommentService {
  constructor(private client: AxiosInstance) {}

  async getAllComments(): Promise<CommitType[]> {
    const response = await this.client<CommitType[]>('/comments');
    if (response.status !== 200) {
      return Promise.reject(
        new Error(`Wrong status code (expected 200, received: ${response.status})`),
      );
    }
    return response.data;
  }

  async createNewCommit(raceId: number, formData: { text: string }): Promise<CommitType> {
    const res = await this.client.post<CommitType>(`/comments/races/${raceId}`, formData); // POST /comments/races/:raceId
    if (res.status !== 200)
      return Promise.reject(new Error(`Wrond status code (expected 201, received: ${res.status}`));
    return res.data;
  }

  // async getAllFestsComments(): Promise<CommitType[]> {
  //   const response = await this.client<CommitType[]>('/festcomments');
  //   if (response.status !== 200) {
  //     return Promise.reject(
  //       new Error(`Wrong status code (expected 200, received: ${response.status})`),
  //     );
  //   }
  //   return response.data;
  // }

  async createNewFestCommit(festId: number, formData: { text: string }): Promise<CommitType> {
    const res = await this.client.post<CommitType>(`/festcomments/fests/${festId}`, formData);
    if (res.status !== 200)
      return Promise.reject(new Error(`Wrond status code (expected 201, received: ${res.status}`));
    return res.data;
  }
}
const commentService = new CommentService(apiAxiosInstance);

export default commentService;
