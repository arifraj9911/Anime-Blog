import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.post("/create", UserController.createUser);

router.get("/get", UserController.getUsers);

router.delete("/delete/:id", UserController.deleteUser);

router.patch("/status-change/:id", UserController.userStatusChange);

export const UserRoutes = router;
