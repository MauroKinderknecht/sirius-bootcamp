import express from 'express';
import { withAuth } from '../middlewares/authenticate.js';

import { router as userRouter } from '../components/controller/user/index.js';
import { router as postRouter } from '../components/controller/post/index.js';

const router = express.Router();

router.use('/user', userRouter);
router.use('/post', withAuth, postRouter);

export { router };
