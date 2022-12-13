import { BookHandlers } from '../interface';
import prisma from '../../../../prisma/client';

const updateBook: BookHandlers['update'] = async (req, res) => {
  const { title } = req.body;
  const { id } = req.params;

  try {
    const book = await prisma.book.update({
      data: { title },
      where: { id },
    });

    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default updateBook;
