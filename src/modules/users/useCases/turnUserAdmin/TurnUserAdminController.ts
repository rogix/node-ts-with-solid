import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const updatedUser = this.turnUserAdminUseCase.execute({ user_id });

      updatedUser.admin = true;

      return response.status(200).json(updatedUser);
    } catch (e) {
      return response.status(404).json({ error: e.message });
    }
  }
}

export { TurnUserAdminController };
