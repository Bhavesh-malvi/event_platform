import { Document, model, models, Schema } from "mongoose";

export interface ICategory extends Document {
    _id: string;
    name: string;
}

const CategotySchema = new Schema({
    name: { type: String, required:true, unique:true }
})

const Categoty = models.Categoty || model('Category', CategotySchema);


export default Categoty;