import { prisma } from '../../../db/index.js'

export class UserService {

    static findById = ({ id }) => {
        return prisma.user.findUnique({
            where: { id }
        })
    }

    static findByEmail = ({ email }) => {
        return prisma.user.findUnique({
            where: { email }
        })
    }

    static create = ({ name, email, password }) => {
        return prisma.user.create({
            data: { name, email, password },
        })
    }

    static update = ({ id, name }) => {
        return prisma.user.update({
            where: { id },
            data: { name },
        })
    }

    static delete = ({ id }) => {
        return prisma.user.delete({
            where: { id }
        })
    }
}