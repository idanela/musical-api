import mongoose from "mongoose";


const singersSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required: true
    },
    genre:
    {
        type:String,
        required:true
    }
})
export default mongoose.model('singer',singersSchema);