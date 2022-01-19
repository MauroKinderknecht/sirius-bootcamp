import { validateAccessToken } from '../utils/token.js';

const withAuth = (req, res, next) => {
    const header = req.headers.authorization;
    const token = header.split(' ')[1];
    if (!header || !token) {
        return res.status(401).json('Access token missing from header');
    }

    const validated = validateAccessToken(token);
    if (!validated) {
        return res.status(401).json('Access token is not valid');
    }

    console.log(validated)

    res.locals.userId = validated.data.userId;
    next();
}

export { withAuth };
