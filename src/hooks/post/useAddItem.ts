import { useMutation, useQueryClient } from "react-query";
import { PostFormResponseType, PostFormValuesType } from "../../types/post.type";

export const useAddItem = (addItem: (values: PostFormValuesType) => Promise<PostFormResponseType>) => {
  const queryClient = useQueryClient();
  return useMutation(addItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('items');
    },
  });
};