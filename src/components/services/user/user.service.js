import { prisma } from '../../../db/index.js'
import { hashPassword, validatePassword } from '../../../utils/password.js'
import { generateAccessToken } from '../../../utils/token.js';

export class UserService {

    static findById = ({ id }) => {
        return prisma.user.findUnique({
            where: { id },
            select: { name: true, email: true, id: true }
        });
    }

    static findByEmail = ({ email }) => {
        return prisma.user.findUnique({
            where: { email },
        });
    }

    static findAll = () => {
        return prisma.user.findMany({ select: { name: true, email: true, id: true } });
    }

    static create = async ({ name, email, password }) => {
        const hashedPassword = await hashPassword(password);
        console.log(hashedPassword);
        return prisma.user.create({
            data: { name, email, password: hashedPassword },
            select: { name: true, email: true, id: true }
        });
    }

    static update = ({ id, name }) => {
        return prisma.user.update({
            where: { id },
            data: { name },
            select: { name: true, email: true, id: true }
        });
    }

    static delete = ({ id }) => {
        return prisma.user.delete({
            where: { id },
            select: { name: true, email: true, id: true }
        });
    }

    static login = async ({ email, password }) => {
        const user = await this.findByEmail({ email });
        if (!user) return false;

        const validated = await validatePassword(password, user.password);
        console.log(validated);
        if (!validated) return false;

        delete user.password;

        const token = generateAccessToken({ userId: user.id });
        return { user, token };
    }
};
