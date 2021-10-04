import { Router } from "express";

import { CreateUserController } from "../module/accounts/useCases/CreateUser/CreateUserController";

const usersRoutes = Router();
const createUserController = new CreateUserController();

usersRoutes.post("/", createUserController.handle);

export { usersRoutes };
