import { UserAplication } from '../../application/user.application';
import { MysqlRepository } from '../mysql.repository';
import { Request, Response } from 'express';
import { User } from '../../domain/user';

const mysqlRepository = new MysqlRepository();
const userAppService = new UserAplication(mysqlRepository);

export class CreateController {
  static createUser(req: Request, res: Response): void {
    const newUser: User = req.body;
    userAppService
      .createUser(newUser)
      .then(() => {
        res.status(201).json({
          message: 'Usuario creado correctamente',
        });
      })
      .catch((error) => {
        console.log('Hubo un error al crear usuario', error);
        res.status(500).json({
          error: 'Error al crear usuario',
        });
      });
  }
}
