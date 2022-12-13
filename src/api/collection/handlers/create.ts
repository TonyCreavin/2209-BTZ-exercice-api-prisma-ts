import { CollectionHandlers } from '../interface';
import prisma from '../../../../prisma/client';

const createCollection: CollectionHandlers['create'] = async (req, res) => {
  const { name } = req.body;

  try {
    const collection = await prisma.collection.create({
      data: {
        name,
      },
    });

    res.status(200).json(collection);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default createCollection;
