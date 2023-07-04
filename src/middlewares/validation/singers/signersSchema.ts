import { body, param } from "express-validator";
import Singer from "../../../models/Singer";
const schemaForPost =[
  body("name").exists({checkFalsy:true}).withMessage("name propety must be supplied").
  isString().withMessage("name has to be a string"),
  body("genre").exists({checkFalsy:true}).withMessage("genre property must be supplied")
  .isString().withMessage("genre property must be a string")  
]

const singerExistsSchema = [
    param("id").exists({checkFalsy:true}).withMessage("must supply an id parameter")
    .isString().withMessage("id must be a string")
    .isMongoId().withMessage("id must be a valid mongo id").
    custom(async(id:string,{req})=>
    {   
        const singer = await Singer.findById(id);
        if(singer == null)
        {
            throw new Error(`Singer with id ${id}, does not exists in the system`);
        }
        req!.singerFromRequest = singer;
    })
]
export{schemaForPost,singerExistsSchema}