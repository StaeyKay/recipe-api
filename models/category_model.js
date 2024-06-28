import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose"

const categorySchema = new Schema ({
    name: {type: String, required: true, unique:true},
    image: {type:String, required: true},
}, {
    timestamps: true
});

categorySchema.plugin(normalize);

export const categoryModel = model('Category', categorySchema);