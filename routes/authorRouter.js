import express from 'express';
import {getAuthorById} from '../controllers/authorController.js';


const authorRouter = express.Router();

authorRouter.get("/", (req, res) => res.send("All authors"));
authorRouter.get("/:authorId", (req, res) => {
  getAuthorById(req, res);
});

export default authorRouter;