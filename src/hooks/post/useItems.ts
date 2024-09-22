import { useQuery } from "react-query";
import { PostType } from "../../types/post.type";

export const useItems = (repository: () => Promise<PostType[]>) => {
  return useQuery<PostType[], Error>('items', repository, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};