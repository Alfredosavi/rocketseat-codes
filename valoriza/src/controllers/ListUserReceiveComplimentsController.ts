import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController {
  async list(request: Request, response: Response) {
    const { user_id } = request;

    const listUserReceiverComplimentsService =
      new ListUserReceiveComplimentsService();

    const compliments = await listUserReceiverComplimentsService.execute(
      user_id
    );

    return response.json(compliments);
  }
}

export { ListUserReceiveComplimentsController };
