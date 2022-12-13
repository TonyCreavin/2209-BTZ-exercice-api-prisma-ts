import { CollectionHandlers } from '../interface';
import prisma from '../../../../prisma/client';

const updateCollection: CollectionHandlers['update'] = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  try {
    const collection = await prisma.collection.update({
      data: { name },
      where: { id },
    });

    res.status(200).json(collection);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default updateCollection;
