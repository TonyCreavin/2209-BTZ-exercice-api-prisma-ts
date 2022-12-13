import { AuthorHandlers } from '../interface';
import prisma from '../../../../prisma/client';

const deleteAuthor: AuthorHandlers['delete'] = async (req, res) => {
  const { id } = req.params;

  try {
    const author = await prisma.author.delete({
      where: { id },
    });

    res.status(200).json(author);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default deleteAuthor;
