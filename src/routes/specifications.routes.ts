import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../module/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../module/cars/useCases/listSpecifications/ListSpecificationsController";

const specificationsRoutes = Router();

const createSpecificationUseCase = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", createSpecificationUseCase.handle);

specificationsRoutes.get("/", listSpecificationsController.handle);

export { specificationsRoutes };
