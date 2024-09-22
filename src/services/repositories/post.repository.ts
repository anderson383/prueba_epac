import { PostFormResponseType, PostFormValuesType, PostType } from "../../types/post.type";

export interface PostRepository {
  fetchItems(): Promise<PostType[]>;
  addItem (newItem: PostFormValuesType): Promise<PostFormResponseType>;
}