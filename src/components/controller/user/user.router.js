import express from 'express';
import { UserService } from '../../services/user/index.js'

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return res.status(400).json('Missing fields');

        let user = await UserService.findByEmail({ email });
        if (user) return res.status(400).json(`User with email ${email} already exists`);

        user = await UserService.create({ name, email, password });
        return res.status(201).json(user);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal server error')
    }
});

router.delete('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        let user = UserService.findById({ id: userId });
        if (!user) return res.status(404).json('User not found');
        user = await UserService.delete({ id: userId });
        return res.status(200).json(user);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal server error')
    }
})

router.put('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const { name } = req.body;
        if (!name) return res.status(400).json('Missing fields');
        let user = UserService.findById({ id: userId });
        if (!user) return res.status(404).json('User not found');
        user = await UserService.update({ id: userId, name });
        return res.status(200).json(user);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal server error')
    }
})

export { router }