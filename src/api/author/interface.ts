import { Author } from '@prisma/client';
import { RequestHandler } from 'express';
import ResponseError from '../responseError';

type AuthorCreate = {
  name: string;
  password: string;
};

export interface AuthorHandlers {
  getAll: RequestHandler<null, Author[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Author | ResponseError, null>;
  create: RequestHandler<null, Author | ResponseError, AuthorCreate>;
  update: RequestHandler<{ id: string }, Author | ResponseError, AuthorCreate>;
  delete: RequestHandler<{ id: string }, Author | ResponseError, null>;
}
