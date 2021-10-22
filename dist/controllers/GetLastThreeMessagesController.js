"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLastThreeMessagesController = void 0;
const GetLastThreeMessagesService_1 = require("../services/GetLastThreeMessagesService");
class GetLastThreeMessagesController {
    async handle(request, response) {
        const service = new GetLastThreeMessagesService_1.GetLastThreeMessagesService();
        try {
            const result = await service.execute();
            return response.json(result);
        }
        catch (error) {
            return response.json({ error: error.message });
        }
    }
}
exports.GetLastThreeMessagesController = GetLastThreeMessagesController;
