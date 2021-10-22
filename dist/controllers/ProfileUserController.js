"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUserController = void 0;
const ProfileUserSevice_1 = require("../services/ProfileUserSevice");
class ProfileUserController {
    async handle(request, response) {
        const service = new ProfileUserSevice_1.ProfileUserService();
        try {
            const result = await service.execute(request.user_id);
            return response.json(result);
        }
        catch (error) {
            return response.json({ error: error.message });
        }
    }
}
exports.ProfileUserController = ProfileUserController;
