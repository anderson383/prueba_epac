import 'reflect-metadata';

import { TYPES } from './types';
import { Container } from 'inversify';
import { PostRepository } from '../repositories/post.repository';
import { PostService } from '../repositories/post.service';

const repositoryContainer = new Container();

repositoryContainer.bind<PostRepository>(TYPES.POST_REPOSITORY).to(PostService);

export { repositoryContainer };
