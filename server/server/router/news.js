import { Router } from "express";
import * as newsController from "../controller/news.js";
import * as sportsnewsController from "../controller/sportsnews.js";

const newsRoute = Router();

newsRoute.post("/addnews", newsController.addnews);
newsRoute.get("/getnews", newsController.getnews);
newsRoute.delete("/deletenews:id", newsController.deleteNews);
newsRoute.post("/sportsnews", sportsnewsController.addsportsNews);
newsRoute.get("/getsportsnews", sportsnewsController.getsportsNews);
export default newsRoute;
