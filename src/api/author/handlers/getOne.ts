import { AuthorHandlers } from '../interface';
import prisma from '../../../../prisma/client';

const getOneAuthor: AuthorHandlers['getOne'] = async (req, res) => {
  const { id } = req.params;

  try {
    const author = await prisma.author.findUniqueOrThrow({
      where: { id },
    });

    res.status(200).json(author);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default getOneAuthor;
