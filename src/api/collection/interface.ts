import { Collection } from '@prisma/client';
import { RequestHandler } from 'express';
import ResponseError from '../responseError';

type CollectionCreate = {
  name: string;
  authorID: string;
};

export interface CollectionHandlers {
  getAll: RequestHandler<null, Collection[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Collection | ResponseError, null>;
  create: RequestHandler<null, Collection | ResponseError, CollectionCreate>;
  update: RequestHandler<
    { id: string },
    Collection | ResponseError,
    CollectionCreate
  >;
  delete: RequestHandler<{ id: string }, Collection | ResponseError, null>;
}
