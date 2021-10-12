import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "../module/accounts/useCases/CreateUser/CreateUserController";
import { UpdateUserAvatarController } from "../module/accounts/useCases/updateUserAvatar/updateUserAvatarController";
import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const uploadAvatar = multer( uploadConfig.upload("./tmp/avatar"));
const createUserController = new CreateUserController();

const updateUserAvatarController = new UpdateUserAvatarController;

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar") ,updateUserAvatarController.handle);

export { usersRoutes };
