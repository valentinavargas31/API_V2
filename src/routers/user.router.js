import { Router } from "express";
import * as UserController from "../controllers/user.controller.js";
import UserScheme from "../schemes/user.schema.js";
import userMiddleware from "../middlewares/user.middleware.js";
import verifyToken from "../middlewares/jwt.middleware.js";

const router=Router();

router.post('/user',userMiddleware(UserScheme.createUser), UserController.createUser);
router.get('/user',verifyToken,UserController.showUser);
router.get('/user/:id',verifyToken,UserController.showIdUser);
router.put('/user/:id',verifyToken,userMiddleware(UserScheme.updateUser),UserController.updateUser);
router.delete('/user/:id',verifyToken,UserController.deleteUser);
router.post('/user/login',UserController.loginUser);

export default router;