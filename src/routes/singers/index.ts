import {Router} from 'express';
import { addSinger, deleteSinger, getAllSingers, getSingleSinger, updateSinger } from './singersHandlers';
import { schemaForPost, singerExistsSchema } from '../../middlewares/validation/singers/signersSchema';
import validateInput from '../../middlewares/validation/validation';

const singersRouter = Router();

singersRouter.get('/',getAllSingers);
singersRouter.get('/:id',singerExistsSchema,validateInput,getSingleSinger)
singersRouter.post('/',schemaForPost,validateInput,addSinger);
singersRouter.delete('/:id',singerExistsSchema,validateInput,deleteSinger);
singersRouter.put('/:id',singerExistsSchema,validateInput,updateSinger);
export default singersRouter