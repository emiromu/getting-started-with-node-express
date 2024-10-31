import express from 'express';
import {getAuthorById} from '../controllers/authorController.js';


const authorRouter = express.Router();

authorRouter.get("/", (req, res) => res.send("All authors"));
authorRouter.get("/:authorId",getAuthorById);

export default authorRouter;