import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { container } from "tsyringe";
class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    try{
      const { name, description } = request.body;

       //injetando a dependência do CreateSpecificationUseCase atraves da biblioteca Tsyringe
      const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase);

      await createSpecificationUseCase.execute({ name, description });

      return response.status(201).send();

    }catch(error){

      return response.status(500).json({msg: error.message});

    }
  }
}

export { CreateSpecificationController };
