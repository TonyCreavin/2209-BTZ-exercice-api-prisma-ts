import { AuthorHandlers } from '../interface';
import prisma from '../../../../prisma/client';

const updateAuthor: AuthorHandlers['update'] = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  try {
    const author = await prisma.author.update({
      data: { name },
      where: { id },
    });

    res.status(200).json(author);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default updateAuthor;
