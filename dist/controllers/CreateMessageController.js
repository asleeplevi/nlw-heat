"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessageController = void 0;
const CreateMessageService_1 = require("../services/CreateMessageService");
class CreateMessageController {
    async handle(request, response) {
        const { message } = request.body;
        const service = new CreateMessageService_1.CreateMessageService();
        try {
            const result = await service.execute(message, request.user_id);
            return response.json(result);
        }
        catch (error) {
            return response.json({ error: error.message });
        }
    }
}
exports.CreateMessageController = CreateMessageController;
