import { APIResponce, APIError } from "../util/api.js";
import { newsModel } from "../schema/news.js";

export async function addnews(req, res) {
  try {
    console.log(req.body);
    const newNews = new newsModel(req.body);
    await newNews.save();
    new APIResponce(res, null, "New news added").json();
  } catch (error) {
    new APIError(res, error, "Error in adding news").json();
  }
}

export async function getnews(req, res) {
  try {
    const data = await newsModel.find();
    new APIResponce(res, data, "All news list").json();
  } catch (error) {
    new APIResponce(
      res,
      error,
      "Somthing is wrong to fetch the news from DB"
    ).json();
  }
}

export async function deleteNews(req, res) {
  try {
    const id = req.body.id;
    // console.log(req.body.id);

    const deleteTask = await newsModel.deleteOne(id);
    if (!deleteTask) {
      new APIError(res, null, "Task not found").json();
    }
    new APIResponce(res, null, "Task deleted successfully").json();
  } catch (error) {}
}
