import postModel from './post.model.js';

export const createPost = async (req, res) => {
    try {
        const post = new postModel(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const findPost = async (req, res) => {
    try {
        const posts = await postModel.find();
        res.status(200).json(
            posts
        );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const findPostByName = async (req, res) => {
    try {
        const postName = req.params.name;
        const postInfo = await postModel.findOne({ name: postName });

        res.status(200).json({
            postInfo,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const addCommentToPost = async (req, res) => {
    try {
        const { name, text } = req.body;
        const postName = req.params.name;

        const postInfo = await postModel.findOne({ name: postName });

        postInfo.comment.push({ name, text });

        await postInfo.save();

        res.status(200).json({
            postInfo,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getCommentsByPostName = async (req, res) => {
    try {
        const postName = req.params.name;
        const postInfo = await postModel.findOne({ name: postName });

        res.status(200).json({
            comments: postInfo.comment,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};