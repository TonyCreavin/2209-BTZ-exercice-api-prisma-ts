import { AuthorHandlers } from '../interface';
import prisma from '../../../../prisma/client';

const createAuthor: AuthorHandlers['create'] = async (req, res) => {
  const { name, password } = req.body;

  try {
    const author = await prisma.author.create({
      data: {
        name,
        password: password,
      },
    });

    res.status(200).json(author);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default createAuthor;
