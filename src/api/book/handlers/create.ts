import { BookHandlers } from '../interface';
import prisma from '../../../../prisma/client';

const createBook: BookHandlers['create'] = async (req, res) => {
  const { title, authorId, collectionId, content } = req.body;

  try {
    const book = await prisma.book.create({
      data: {
        content,
        title,
        author: {
          connect: {
            id: authorId,
          },
        },
        collection: {
          connect: {
            id: collectionId,
          },
        },
      },
    });

    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default createBook;
