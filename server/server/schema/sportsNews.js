import { Schema, model } from "mongoose";

const sportsnewsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  publishDate: { type: Date, required: true },
});

const sportsnewsModel = model("sportsnews", sportsnewsSchema, "sportsnewses");

export { sportsnewsModel, sportsnewsSchema };
