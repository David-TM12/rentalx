import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "../module/accounts/useCases/CreateUser/CreateUserController";
import { UpdateUserAvatarController } from "../module/accounts/useCases/updateUserAvatar/updateUserAvatarController";

const usersRoutes = Router();

const upload = multer({
    dest: "./avatar",
});

const createUserController = new CreateUserController();

const updateUserAvatarController = new UpdateUserAvatarController;

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch("/avatar", upload.single("file") ,updateUserAvatarController.handle);

export { usersRoutes };