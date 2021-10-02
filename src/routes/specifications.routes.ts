import { Router } from "express";
import { CreateSpecificationController } from "../module/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../module/cars/useCases/listSpecifications/ListSpecificationsController";

const specificationsRoutes = Router();


const createSpecificationUseCase = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.post("/", createSpecificationUseCase.handle);

specificationsRoutes.get("/", listSpecificationsController.handle);

export { specificationsRoutes };