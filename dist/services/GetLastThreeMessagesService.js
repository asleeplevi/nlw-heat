"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLastThreeMessagesService = void 0;
const prisma_1 = require("../prisma");
class GetLastThreeMessagesService {
    async execute() {
        const lastMessages = await prisma_1.prismaClient.message.findMany({
            take: 3,
            orderBy: {
                created_at: 'desc'
            },
            include: {
                user: true
            }
        });
        return lastMessages;
    }
}
exports.GetLastThreeMessagesService = GetLastThreeMessagesService;
