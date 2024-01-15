import { sportsnewsModel } from "../schema/sportsNews.js";
import { APIResponce, APIError } from "../util/api.js";

export async function addsportsNews(req, res) {
  //   console.log(req.body);
  try {
    // console.log(req.body);
    const newsportsNews = new sportsnewsModel(req.body);

    newsportsNews.save();
    new APIResponce(res, null, "Sports News Added").json();
  } catch (error) {
    new APIError(res, error, "Invalid Sports News").json();
  }
}

export async function getsportsNews(req, res) {
  try {
    const allSportsNews = await sportsnewsModel.find();
    new APIResponce(res, allSportsNews, "All sports News").json();
  } catch (error) {
    new APIError(
      res,
      null,
      "Somting is wrong in fatching in sports news"
    ).json();
  }
}
