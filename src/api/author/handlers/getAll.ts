import { AuthorHandlers } from '../interface';
import prisma from '../../../../prisma/client';

const getAllAuthors: AuthorHandlers['getAll'] = async (req, res) => {
  try {
    const authors = await prisma.author.findMany();
    res.status(200).json(authors);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default getAllAuthors;
