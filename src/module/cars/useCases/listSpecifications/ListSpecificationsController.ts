import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./ListSpecificationUseCase";


class ListSpecificationsController {
    
    constructor(private listSpecificationsUseCase: ListSpecificationsUseCase){}

    handle(request: Request, response: Response) : Response{
        const listSpecification = this.listSpecificationsUseCase.execute();
        return response.status(200).json( listSpecification );
    }
} 

export { ListSpecificationsController };