import { Router } from "express";
import { check } from "express-validator";
import {
    createPost,
    findPost,
    findPostByName,
    addCommentToPost,
    getCommentsByPostName,
} from "./post.controller.js";
import { validateFields } from "../middlewares/validate-fields.js";

const router = Router();

router.post(
    "/createPost",
    [
        check("name", "Name is required").not().isEmpty(),
        check("title", "Title is required").not().isEmpty(),
        validateFields,
    ],
    createPost
);  
    
router.get("/posts/:name", findPost);

router.get("/post/:name", findPostByName);

router.post(
    "/posts/:name/add-comments",
    [
        check("name", "Anonymous posting is not allowed").not().isEmpty(),
        check("text", "There is no content to add to the comment.").not().isEmpty(),
        validateFields,
    ],
    addCommentToPost
);

router.get("/posts/:name/comments", getCommentsByPostName);

export default router;