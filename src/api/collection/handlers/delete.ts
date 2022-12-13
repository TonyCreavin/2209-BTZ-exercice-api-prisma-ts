import { CollectionHandlers } from '../interface';
import prisma from '../../../../prisma/client';

const deleteCollection: CollectionHandlers['delete'] = async (req, res) => {
  const { id } = req.params;

  try {
    const collection = await prisma.collection.delete({
      where: { id },
    });

    res.status(200).json(collection);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default deleteCollection;
