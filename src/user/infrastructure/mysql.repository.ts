import { query } from '../../database/db.config';
import { UserRepository } from '../domain/user.repository';
import { User } from '../domain/user';

export class MysqlRepository implements UserRepository {
  createUser = async (user: User): Promise<any> => {
    const sql = 'INSERT INTO user (username, password) VALUES (?, ?)';
    const params = [user.username, user.password];
    try {
      const result = await query(sql, params);
      console.log('Usuario creado correctamente');
      return result;
    } catch (error) {
      console.log('Error al crear usuario', error);
      throw error;
    }
  };

  async deleteUser(userId: number): Promise<void> {
    const sql = 'DELETE FROM user WHERE id = ?';
    const params = [userId];
    try {
      const result = await query(sql, params);
      console.log('Usuario eliminado correctamente', result);
    } catch (error) {
      console.log('Error al eliminar usuario', error);
      throw error;
    }
  }
}
