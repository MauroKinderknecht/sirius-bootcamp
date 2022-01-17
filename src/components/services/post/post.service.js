import { prisma } from '../../../db/index.js'

export class PostService {

    static findById = ({ id }) => {
        return prisma.post.findUnique({
            where: { id }
        })
    }

    static findByAuthor = ({ authorId }) => {
        return prisma.post.findMany({
            where: { authorId }
        })
    }

    static create = ({ authorId, title, content }) => {
        return prisma.post.create({
            data: { authorId, title, content },
        })
    }

    static delete = ({ id }) => {
        return prisma.post.delete({
            where: { id }
        })
    }
}