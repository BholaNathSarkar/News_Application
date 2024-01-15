import { Schema, model } from "mongoose";

const newsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  publishDate: { type: Date, required: true },
});

const newsModel = model("newslist", newsSchema, "newslist");

export { newsModel, newsSchema };
