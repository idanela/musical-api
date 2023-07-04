import {body, param } from 'express-validator';
import Song from '../../../models/Song';
import Singer from '../../../models/Singer';

const postSchema =
[
    body("name").exists({checkFalsy:true}).withMessage("name propety must be supplied").
    isString().withMessage("name has to be a string"),
    body("views").optional().isInt().withMessage("Views must be a number"). 
    custom((views)=>
    {
        if(views<0)
        {
            throw new Error ("Views must be a non-negative number")
        }
    })
    ,body("singer").exists({checkFalsy:true}).withMessage("please supply a singer property")
    .isString().withMessage("singer property must be a string")
    .isMongoId().withMessage("singer property must be a valid mongo id")
    .custom(async(singer)=>
    {
        const singerFromDB = await Singer.findById(singer);
        if(singerFromDB == null)
        {
            throw new Error(`Singer with id ${singer} does no exists`)
        }
    })
]

const songExistsSchema = [
param("id").exists({checkFalsy:true}).withMessage("please provide and id as a parameter").
isString().withMessage("Id must be a string")
.isMongoId().withMessage("id must be a mongo id")
.custom(async(id:string,{req})=>
{
    const song = await Song.findById(id);
    if(song == null)
    {
        throw new Error(`Song with id ${id} does not exist`)
    }
    req.songFromRequest = song;
})
]
export{postSchema,songExistsSchema}