import * as Yup from 'yup';
import { PostFormValuesType } from '../../../types/post.type';

export const postValidationSchema = Yup.object<PostFormValuesType>().shape({
  title: Yup.string()
    .required('Title is required')
    .max(100, 'Title cannot exceed 100 characters'),
  body: Yup.string()
    .required('Body is required')
    .min(10, 'Body must be at least 10 characters'),
});
