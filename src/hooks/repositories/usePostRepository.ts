import { useRepositoryIoc } from '../../services/config/context';
import { TYPES } from '../../services/config/types';
import { PostRepository } from '../../services/repositories/post.repository';

const usePostRepository = () : PostRepository => {
  const { container } = useRepositoryIoc();
  return container.get(TYPES.POST_REPOSITORY);
};

export default usePostRepository;
