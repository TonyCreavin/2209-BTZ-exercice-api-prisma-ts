import { Book } from '@prisma/client';
import { RequestHandler } from 'express';
import ResponseError from '../responseError';

type BookBodyCreate = {
  title: string;
  content: string;
  authorId: string;
  collectionId: string;
};

export interface BookHandlers {
  getAll: RequestHandler<null, Book[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Book | ResponseError, null>;
  create: RequestHandler<null, Book | ResponseError, BookBodyCreate>;
  update: RequestHandler<{ id: string }, Book | ResponseError, BookBodyCreate>;
  delete: RequestHandler<{ id: string }, Book | ResponseError, null>;
}
