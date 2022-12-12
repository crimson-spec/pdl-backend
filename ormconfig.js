const dotenv = require('dotenv');
const { SnakeNamingStrategy } = require('typeorm-snake-naming-strategy');

dotenv.config({
  path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.production',
});

module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'admin',
  database: process.env.DB_DATABASE || 'mydatabase',
  synchronize: false,
  // logging: true,
  entities: [process.env.TYPEORM_ENTITIES],
  migrations: [process.env.TYPEORM_MIGRATIONS],
  subscribers: [''],
  cli: {
    entitiesDir: '',
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
    subscribersDir: '',
  },
  namingStrategy: new SnakeNamingStrategy(),
};
