import express from 'express';
import { PostService } from '../../services/post/index.js';

const router = express.Router();

router.post('', async (req, res) => {
    try {
        const { title, content } = req.body;
        const { userId } = res.locals;

        if (!title || !content) {
            return res.status(400).json('Missing fields');
        }

        const post = await PostService.create({ authorId: userId, title, content });
        return res.status(200).json(post)
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
});

export { router };
