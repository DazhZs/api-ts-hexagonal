import express from 'express';
import { CreateController } from './controller/create.controller';
import { DeleteController } from './controller/delete.controller';

export const userRouter = express.Router();

userRouter.post('/users', CreateController.createUser);
userRouter.delete('/users/:id', DeleteController.deleteUser);

export default userRouter;
