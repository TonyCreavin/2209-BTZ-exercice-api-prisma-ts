// src/api/index.ts

import { Router } from 'express';

import books from './book/routes';
import collections from './collection/routes';
import authors from './author/routes';

const router = Router();

router.use('/books', books);
router.use('/collections', collections);
router.use('/authors', collections);

export default router;
