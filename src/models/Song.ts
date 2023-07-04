import mongoose from "mongoose";

const schema = mongoose.Schema;
const songsSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    views:
    {
        type:Number,
        default:0
    },
    singer:
    {
        type :schema.Types.ObjectId,
        required:true
    }
})

export default mongoose.model('song',songsSchema);