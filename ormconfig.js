require('dotenv').config();
const { SnakeNamingStrategy } = require('typeorm-snake-naming-strategy');

module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'admin',
  database: process.env.DB_DATABASE || 'mydatabase',
  synchronize: false,
  logging: true,
  entities: [
    'src/shared/infra/typeorm/entities/*.ts',
    'src/modules/**/infra/typeorm/entities/*.ts',
  ],
  migrations: ['src/shared/infra/typeorm/database/migrations/*.ts'],
  subscribers: [''],
  cli: {
    entitiesDir: '',
    migrationsDir: 'src/shared/infra/typeorm/database/migrations',
    subscribersDir: '',
  },
  namingStrategy: new SnakeNamingStrategy(),
};
