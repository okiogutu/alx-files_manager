import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  /**
   * should return if Redis is alive
   * 2 utils created previously:
   * { "redis": true, "db": true } with a status code 200
   */
  static getStatus(request, response) {
    const status = {
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    };
    response.status(200).send(status);
  }

  /* should return the number of users and files in DB */
  static async getStats(request, response) {
    const stats = {
      users: await dbClient.nbUsers(),
      files: await dbClient.nbFiles(),
    };
    response.status(200).send(stats);
  }
}

export default AppController;
