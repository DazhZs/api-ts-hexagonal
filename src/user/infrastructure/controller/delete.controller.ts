import { UserAplication } from '../../application/user.application';
import { MysqlRepository } from '../mysql.repository';
import { Request, Response } from 'express';

const mysqlRepository = new MysqlRepository();
const userAppService = new UserAplication(mysqlRepository);

export class DeleteController {
  static deleteUser(req: Request, res: Response) {
    const userId: number = parseInt(req.params.id, 10);
    userAppService
      .deleteUser(userId)
      .then(() => {
        res.status(200).json({
          message: 'Usuario eliminado correctamente',
        });
      })
      .catch((error) => {
        console.log('Hubo un error al eliminar usuario', error);
        res.status(500).json({
          error: 'Error al eliminar usuario',
        });
      });
  }
}
