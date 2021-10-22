"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUserService = void 0;
const prisma_1 = require("../prisma");
class ProfileUserService {
    async execute(user_id) {
        const userProfile = await prisma_1.prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        });
        return userProfile;
    }
}
exports.ProfileUserService = ProfileUserService;
