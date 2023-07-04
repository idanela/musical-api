import { Router } from "express";
import { getAllSongs, addSong, getSingleSong, deleteSong, updateSong } from "./songsHandlers";
import validateInput from "../../middlewares/validation/validation";
import { postSchema, songExistsSchema } from "../../middlewares/validation/songs/songSchema";

const songsRouter = Router();

songsRouter.get('/',getAllSongs);
songsRouter.get('/:id',songExistsSchema,validateInput,getSingleSong);
songsRouter.post('/',postSchema,validateInput,addSong);
songsRouter.delete('/:id',songExistsSchema,validateInput,deleteSong);
songsRouter.put('/:id',songExistsSchema,validateInput,updateSong);

export default songsRouter

