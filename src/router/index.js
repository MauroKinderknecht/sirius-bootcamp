import express from 'express';
import { router as userRouter } from '../components/controller/user/index.js'

const router = express.Router();

router.use('/user', userRouter);
//router.use('/post', postRouter);

export { router }