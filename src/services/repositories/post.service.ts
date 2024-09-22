
import {injectable} from 'inversify'
import { PostRepository } from './post.repository';
import axiosIntance from '../../core/axios-config';
import { PostFormResponseType, PostFormValuesType, PostType } from '../../types/post.type';

@injectable()
export class PostService implements PostRepository {

  constructor() {

  }

  async fetchItems () {
    const response = await axiosIntance.get<PostType[]>('/posts');
    return response.data;
  }
  
  async addItem (newItem:PostFormValuesType) {
    const response = await axiosIntance.post<PostFormResponseType>('/posts', newItem);
    return response.data;
  }
}
